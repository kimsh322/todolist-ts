import styled from "styled-components";
import { format } from "date-fns";
import ConfirmList from "../Components/ConfirmList";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../FireBase/firebase";
import { useState } from "react";

const TodayEndContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: beige;
  position: relative;

  .list-box {
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    background-color: gray;
    padding: 50px;
    overflow: auto;
  }
  .textarea-container {
    width: 70%;
    height: 40%;
    display: flex;
    flex-direction: column;
    background-color: orange;
    #story {
      height: 90%;
    }
  }
  .todayend-submit {
    background-color: #49d01c;
    position: absolute;
    right: 3%;
    bottom: 5%;
    width: 10%;
    height: 10%;
    font-size: 1em;
    padding: 0;
    border: none;
    border-radius: 10px;
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
  const initialTodayConfirmList: TodayListArr = todayItems
    ? JSON.parse(todayItems)
    : [];
  const [memo, setMemo] = useState<string>("");
  const [todayConfirmList, setTodayConfirmList] = useState(
    initialTodayConfirmList
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  };

  const handleSubmit = async () => {
    if (todayConfirmList.length) {
      const newObj = {
        list: todayConfirmList,
        memo,
      };
      try {
        const docRef = await setDoc(
          doc(db, "userId", format(new Date(), "PP")),
          newObj
        );
        console.log("Document written with ID: ", docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <TodayEndContainer>
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
        <label htmlFor="story">메모적기</label>
        <textarea
          id="story"
          name="story"
          value={memo}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
      <button className="todayend-submit" onClick={() => handleSubmit()}>
        {" "}
        오늘 일과 끝!
      </button>
    </TodayEndContainer>
  );
};

export default TodayEnd;
