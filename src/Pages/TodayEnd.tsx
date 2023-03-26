import styled from "styled-components";
import { format } from "date-fns";
import ConfirmList from "../Components/ConfirmList";
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
`;
interface TodayList {
  key: string;
  value: string;
  done: boolean;
}
type TodayListArr = TodayList[];

const TodayEnd = () => {
  const TodayItems = localStorage.getItem(format(new Date(), "P"));
  const todayConfirmList: TodayListArr = TodayItems
    ? JSON.parse(TodayItems)
    : [];
  return (
    <TodayEndContainer>
      <ul className="list-box">
        {todayConfirmList.length !== 0
          ? todayConfirmList.map((el, idx) => {
              return (
                <ConfirmList
                  key={el.key}
                  text={el.value}
                  done={el.done}
                  idx={idx}
                />
              );
            })
          : null}
      </ul>
      <div className="textarea-container">
        <label htmlFor="story">메모적기</label>
        <textarea id="story" name="story"></textarea>
      </div>
    </TodayEndContainer>
  );
};

export default TodayEnd;
