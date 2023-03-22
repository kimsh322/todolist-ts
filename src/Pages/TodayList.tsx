import styled from "styled-components";
import { useAppSelector } from "../store/reduxHooks";
import ListItem from "../Components/ListItem";
import AddList from "../Components/AddList";
import Today from "../Components/Today";

const TodayListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #dbecb0;
  position: relative;
  padding-left: 0;

  .list-box {
    width: 70%;
    height: 70%;
    background-color: beige;
    display: flex;
    flex-direction: column;
    padding: 50px;
    overflow: auto;
  }
`;

const TodayList = () => {
  const todayList = useAppSelector((state) => state.todayList);

  return (
    <TodayListContainer>
      <Today />
      <AddList />
      <ul className="list-box">
        {todayList.map((el, idx) => {
          return <ListItem key={idx} text={el.value} idx={idx} />;
        })}
      </ul>
    </TodayListContainer>
  );
};

export default TodayList;
