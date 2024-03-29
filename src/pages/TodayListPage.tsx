import styled from "styled-components";
import { useAppSelector } from "../store/reduxHooks";
import ListItem from "../components/todaylist-page/ListItem";
import AddList from "../components/todaylist-page/AddList";
import Today from "../components/Today";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal-contents/Modal";
import useModal from "../hooks/useModal";
import {
  confirmListModalContents,
  noListModalContents,
} from "../components/modal-contents/todayListModalContents";

const TodayListPageContainer = styled.ul`
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
    @media screen and (max-width: 600px) {
      width: 100%;
      height: 60%;
      padding: 5% 5% 10% 0;
    }
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
    @media screen and (max-width: 600px) {
      width: 20%;
      bottom: 2%;
      right: 2%;
    }
  }
`;

const TodayListPage = () => {
  const todayList = useAppSelector((state) => state.todayList);
  const confirmContents = useModal(confirmListModalContents);
  const noListContents = useModal(noListModalContents);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (todayList.length === 0) {
      noListContents.setIsOpen(true);
      return;
    }
    confirmContents.setIsOpen(true);
    localStorage.setItem(format(new Date(), "P"), JSON.stringify(todayList));
    setTimeout(() => confirmContents.setIsOpen(false), 900);
    setTimeout(() => navigate("/todayend"), 1000);
  };

  return (
    <TodayListPageContainer>
      <Today />
      <AddList />
      <ul className="list-box">
        {todayList.map((el, idx) => {
          return <ListItem key={el.key} listKey={el.key} text={el.value} idx={idx} />;
        })}
      </ul>
      <button className="confirm" onClick={() => handleSubmit()}>
        확정하기!
      </button>
      <Modal {...confirmContents} />
      <Modal {...noListContents} />
    </TodayListPageContainer>
  );
};

export default TodayListPage;
