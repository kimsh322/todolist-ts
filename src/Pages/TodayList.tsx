import styled from "styled-components";
import { useAppSelector } from "../store/reduxHooks";
import ListItem from "../Components/ListItem";
import AddList from "../Components/AddList";
import Today from "../Components/Today";
import { useState } from "react";
import TodayListModal from "../Components/TodayListModal";
import { format } from "date-fns";

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
  .confirm {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 3%;
    bottom: 5%;
    width: 10%;
    height: 10%;
    background-color: #ca20ae;
    color: white;
    font-size: 1.5em;
    padding: 0;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: all 0.2s;
      border: 3px solid #620653;
    }
    &:active {
      box-shadow: inset -0.3rem -0.1rem 1.4rem #3c1137,
        inset 0.3rem 0.4rem 0.8rem #3c1137;
    }
  }
`;

const TodayList = () => {
  const todayList = useAppSelector((state) => state.todayList);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    setIsOpen(true);
    localStorage.setItem(format(new Date(), "P"), JSON.stringify(todayList));
  };

  return (
    <TodayListContainer>
      <Today />
      <AddList />
      <ul className="list-box">
        {todayList.map((el, idx) => {
          return <ListItem key={el.key} text={el.value} idx={idx} />;
        })}
      </ul>
      <button className="confirm" onClick={() => handleSubmit()}>
        Submit
      </button>
      <TodayListModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </TodayListContainer>
  );
};

export default TodayList;
