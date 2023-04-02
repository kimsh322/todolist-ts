import styled from "styled-components";
import { format } from "date-fns";
import ConfirmList from "../Components/ConfirmList";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../FireBase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FireBase/firebase";
import { useEffect, useState } from "react";
import Today from "../Components/Today";
import TodayEndConfirmModal from "../Components/TodayEndConfirmModal";
import { useNavigate } from "react-router-dom";
import TodayEndFailModal from "../Components/TodayEndFailModal";
import TodayListFailModal from "../Components/IsNoListFailModal";

const TodayEndContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff4e0;
  position: relative;
  .list-box {
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    background-color: #97deff;
    padding: 50px;
    overflow-y: auto;
    border-radius: 10px 10px 0 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .textarea-container {
    width: 70%;
    height: 40%;
    display: flex;
    flex-direction: column;
    background-color: #62cdff;
    border-radius: 0 0 10px 10px;
    .memo-label {
      height: 20%;
      font-size: 2.5em;
      padding-left: 1%;
    }
    #story {
      height: 80%;
      border-radius: 0 0 10px 10px;
      background-color: #f6f1f1;
      font-size: 1.5em;
      resize: none;
    }
  }
  .todayend-submit {
    background-color: #aa77ff;
    position: absolute;
    right: 3%;
    bottom: 5%;
    width: 10%;
    height: 10%;
    font-size: 2em;
    padding: 0;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: all 0.2s;
      border: 3px solid #620653;
    }
  }
`;
interface TodayList {
  key: string;
  value: string;
  done: boolean;
}
type TodayListArr = TodayList[];

const TodayEnd = () => {
  const todayItems = localStorage.getItem(format(new Date(), "P"));
  const initialTodayConfirmList: TodayListArr = todayItems ? JSON.parse(todayItems) : [];
  const [memo, setMemo] = useState<string>("");
  const [todayConfirmList, setTodayConfirmList] = useState(initialTodayConfirmList);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isFailModalOpen, setIsFailModalOpen] = useState(false);
  const [isNoListModalOpen, setIsNoListModalOpen] = useState(false);
  const [currentUserUid, setCurrentUserUid] = useState("");
  const navigate = useNavigate();
  // 현재 유저 정보 가져오기
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setCurrentUserUid(uid);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const handleSubmit = async () => {
    // 로그인했을때만 데이터베이스에 저장
    if (todayConfirmList.length && currentUserUid !== "") {
      let text = memo;
      text = text.replace(/(?:\r\n|\r|\n)/g, "<br>"); // 엔터누르면 <br>로 바꿈
      const newObj = {
        list: todayConfirmList,
        memo: text,
      };
      try {
        const docRef = await setDoc(doc(db, currentUserUid, format(new Date(), "PP")), newObj);
        console.log("Document written with ID: ", docRef);
        setIsConfirmModalOpen(true);
        localStorage.removeItem(format(new Date(), "P"));
        setTimeout(() => navigate(0), 1000);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else if (currentUserUid === "") {
      setIsFailModalOpen(true);
    } else {
      setIsNoListModalOpen(true);
    }
  };

  return (
    <TodayEndContainer>
      <Today />
      <ul className="list-box">
        {todayConfirmList.length !== 0
          ? todayConfirmList.map((el, idx) => {
              return (
                <ConfirmList
                  key={el.key}
                  text={el.value}
                  idx={idx}
                  todayConfirmList={todayConfirmList}
                  setTodayConfirmList={setTodayConfirmList}
                />
              );
            })
          : null}
      </ul>
      <div className="textarea-container">
        <label htmlFor="story" className="memo-label">
          메모하기
        </label>
        <textarea id="story" name="story" value={memo} onChange={(e) => handleChange(e)}></textarea>
      </div>
      <button className="todayend-submit" onClick={() => handleSubmit()}>
        완료!
      </button>
      {isConfirmModalOpen ? <TodayEndConfirmModal setIsConfirmModalOpen={setIsConfirmModalOpen} /> : null}
      {isFailModalOpen ? <TodayEndFailModal setIsFailModalOpen={setIsFailModalOpen} /> : null}
      {isNoListModalOpen ? (
        <TodayListFailModal isFailModalOpen={isNoListModalOpen} setIsFailModalOpen={setIsNoListModalOpen} />
      ) : null}
    </TodayEndContainer>
  );
};

export default TodayEnd;
