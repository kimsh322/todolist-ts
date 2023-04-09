import styled from "styled-components";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format } from "date-fns";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../fireBase/firebaseApp";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { GiDisc } from "react-icons/gi";
import CalenderDataModal from "./CalenderDataModal";

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
      display: flex;
      margin: 0.1%;
      width: 14%;
      height: 100%;
      background-color: #fff4e0;
      border: 0.5px solid black;
      font-size: 1.2em;
      position: relative;
      &:hover {
        background-color: #b2a4ff;
      }
      span {
        color: black;
      }
      .not-valid {
        opacity: 0.2;
      }
      .exist-data-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        height: 70%;
        transform: translate(-50%, -50%);
        color: #675d50;
        cursor: pointer;
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
interface ItemList {
  key: string;
  value: string;
  done: boolean;
}
interface EachDataObj {
  memo: string;
  list: ItemList[];
}
interface GetDataObj {
  [key: string]: EachDataObj;
}
interface DataObj {
  [key: string]: any; // 이거는 잘 모르겠다..
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [curDayData, setCurDayData] = useState<EachDataObj>({ memo: "a", list: [] });
  const [userData, setUserData] = useState<GetDataObj>({});

  //오늘인지 확인하는 함수
  const isToday = (a: Date, b: Date) => {
    return (
      format(a, "d") === format(b, "d") &&
      format(a, "M") === format(new Date(), "M") &&
      format(a, "M") === format(b, "M") &&
      format(a, "Y") === format(new Date(), "Y")
    );
  };

  // 해당날짜에 데이터있는지 확인
  const isKeyThere = (formatDate: string, monthYear: Date, day: Date) => {
    let month = format(monthYear, "MMM");
    let year = format(monthYear, "y");
    let curKey = `${month} ${formatDate}, ${year}`;
    // 키가 있고 && 해당 달의 날짜인지 확인
    return curKey in userData && format(monthYear, "M") === format(day, "M");
  };

  // 달력에 뜨는 아이콘 클릭 이벤트
  const handleDayClick = (day: string, monthYear: Date) => {
    let month = format(monthYear, "MMM");
    let year = format(monthYear, "y");
    let curKey = `${month} ${day}, ${year}`;
    if (curKey in userData) {
      // 해당 날짜 데이터 있으면 state로 할당
      setCurDayData({ ...userData[curKey] }); // 새 객체 할당해야함
    }
  };
  // curData 변경되면 Modal 창 띄우기
  useEffect(() => {
    if (curDayData.list.length !== 0) {
      setIsModalOpen(true);
    }
  }, [curDayData]);

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

  // 유저 데이터 받아오기
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

  // 달력 만들기
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      let formatDate = format(day, "d");
      week.push(
        <div key={formatDate} className={`cell ${isToday(curMonth, day) ? "today" : ""}`}>
          <span className={format(curMonth, "M") !== format(day, "M") ? "not-valid" : ""}>{formatDate}</span>
          {isKeyThere(formatDate, curMonth, day) ? (
            <GiDisc className="exist-data-icon" onClick={() => handleDayClick(formatDate, curMonth)} />
          ) : null}
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

  return (
    <DaysContainer>
      {cells}
      {isModalOpen ? <CalenderDataModal curDayData={curDayData} setIsModalOpen={setIsModalOpen} /> : null}
    </DaysContainer>
  );
};

export default CalenderDays;
