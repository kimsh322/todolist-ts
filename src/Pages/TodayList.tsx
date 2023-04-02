import styled from "styled-components";
import { useAppSelector } from "../store/reduxHooks";
import ListItem from "../Components/ListItem";
import AddList from "../Components/AddList";
import Today from "../Components/Today";
import { useState } from "react";
import TodayListSaveModal from "../Components/TodayListSaveModal";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import TodayListFailModal from "../Components/IsNoListFailModal";

const TodayListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff4e0;
  position: relative;
  padding-left: 0;

  .list-box {
    width: 70%;
    height: 70%;
    background-color: #ffbf9b;
    display: flex;
    flex-direction: column;
    padding: 50px;
    overflow: auto;
    border-radius: 0 0 10px 10px;
    &::-webkit-scrollbar {
      display: none;
    }
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
    background-color: #4d4d4d;
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
    /* &:active {
      box-shadow: inset -0.3rem -0.1rem 1.4rem #3c1137, inset 0.3rem 0.4rem 0.8rem #3c1137;
    } */
  }
`;

const TodayList = () => {
  const todayList = useAppSelector((state) => state.todayList);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isFailModalOpen, setIsFailModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (todayList.length === 0) {
      setIsFailModalOpen(true);
      return;
    }
    setIsSaveModalOpen(true);
    localStorage.setItem(format(new Date(), "P"), JSON.stringify(todayList));
    setTimeout(() => setIsSaveModalOpen(false), 900);
    setTimeout(() => navigate("/todayend"), 1000);
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
        확정하기!
      </button>
      <TodayListSaveModal isSaveModalOpen={isSaveModalOpen} setIsSaveModalOpen={setIsSaveModalOpen} />
      <TodayListFailModal isFailModalOpen={isFailModalOpen} setIsFailModalOpen={setIsFailModalOpen} />
    </TodayListContainer>
  );
};

export default TodayList;
