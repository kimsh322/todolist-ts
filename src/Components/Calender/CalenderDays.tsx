import styled from "styled-components";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format } from "date-fns";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../FireBase/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const DaysContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
  .week {
    margin-left: 0.3%;
    display: flex;
    width: 100%;
    height: 20%;
    margin-bottom: 0.1%;
    .cell {
      margin: 0.1%;
      width: 14%;
      height: 100%;
      background-color: #fff4e0;
      border: 0.5px solid black;
      font-size: 1.2em;
      &:hover {
        background-color: #b2a4ff;
      }
      span {
        color: black;
      }
      .not-valid {
        opacity: 0.2;
      }
    }
    .today {
      border: 1px solid red;
      background-color: #ffbf9b;
    }
  }
`;

interface Props {
  curMonth: Date;
}
interface DataObj {
  [key: string]: {};
}

const CalenderDays = ({ curMonth }: Props) => {
  const startMonth = startOfMonth(curMonth);
  const endMonth = endOfMonth(startMonth);
  const startDate = startOfWeek(startMonth);
  const endDate = endOfWeek(endMonth);

  const cells = [];
  let week = [];
  let day = startDate;
  let key = 0;

  //오늘인지 확인하는 함수
  const isToday = (a: Date, b: Date) => {
    return (
      format(a, "d") === format(b, "d") &&
      format(a, "M") === format(new Date(), "M") &&
      format(a, "M") === format(b, "M") &&
      format(a, "Y") === format(new Date(), "Y")
    );
  };

  const handleDayClick = (day: string, monthYear: Date) => {
    let month = format(monthYear, "MMM");
    let year = format(monthYear, "y");
    let curKey = `${month} ${day}, ${year}`;
    console.log(curKey);
  };

  // 일단 데이터를 찾아온다. => 완료
  // 데이터랑 맞는 날짜를 찾는다. => 함수하나 만들어서 해당 날짜가 데이터 키에 있는지 true/false 반환
  // true면 해당 div박스에 클래스 추가되게 삼항연산자
  // 그날짜 div에 onclick에 해당 데이터 setState해주고
  // setState(현재날짜 데이터, () => {setModal(true)}
  // 이런식으로 작성
  // 끝인가?

  const [userData, setUserData] = useState<DataObj>({});
  // 현재 유저 정보 가져오기
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        getData(uid);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  // 데이터 받아오기
  const getData = async (uid: string) => {
    if (uid) {
      const docRef = collection(db, uid);
      const docSnap = await getDocs(docRef);
      const obj: DataObj = {};
      if (docSnap) {
        docSnap.forEach((doc) => {
          obj[doc.id] = doc.data();
        });
        setUserData(obj);
      }
    }
  };
  console.log(userData);

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      let formatDate = format(day, "d");
      week.push(
        <div
          key={formatDate}
          onClick={() => handleDayClick(formatDate, curMonth)}
          className={`cell ${isToday(curMonth, day) ? "today" : ""}`}
        >
          <span className={format(curMonth, "M") !== format(day, "M") ? "not-valid" : ""}>{formatDate}</span>
        </div>
      );
      day = addDays(day, 1);
    }
    cells.push(
      <div className="week" key={++key}>
        {week}
      </div>
    );
    week = [];
  }

  return <DaysContainer>{cells}</DaysContainer>;
};

export default CalenderDays;
