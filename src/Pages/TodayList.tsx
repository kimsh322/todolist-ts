import { useState } from "react";
import styled from "styled-components";
import add_button from "../img/add_button.png";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { setTodayList } from "../store/itemSlice";
import ListItem from "../Components/ListItem";

const TodayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: yellow;
  position: relative;
  .add-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 10%;
    background-color: skyblue;
    .add-box-text {
      margin-left: 1em;
      font-size: 1.5em;
    }
    .add-input {
      width: 60%;
      height: 80%;
      font-size: 1.5em;
    }
    .add-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10%;
      height: 80%;
      background-color: #33ce33;
      margin-right: 1em;
      border: #808080 outset 3px;
      .add-button-img {
        height: 100%;
        aspect-ratio: auto 1 / 1;
      }
      &:active {
        border: #808080 inset 3px;
      }
    }
  }
  .list-box {
    width: 70%;
    height: 75%;
    background-color: beige;
    display: flex;
    flex-direction: column;
    padding: 50px;
  }
`;

const TodayList = () => {
  const [inputText, setInputText] = useState<string>("");
  const todayList = useAppSelector((state) => state.todayList.value);
  const dispatch = useAppDispatch();

  const handleTextChange = (event: React.BaseSyntheticEvent) => {
    setInputText(event.target.value);
  };

  const handleClick = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    if (inputText) {
      dispatch(setTodayList(inputText));
      setInputText("");
    }
  };
  return (
    <TodayListContainer>
      <form className="add-box">
        <span className="add-box-text">할 일 추가 : </span>
        <input
          className="add-input"
          value={inputText}
          onChange={(e) => handleTextChange(e)}
        />
        <button className="add-button" onClick={(e) => handleClick(e)}>
          <img className="add-button-img" src={add_button} alt="add-button" />
        </button>
      </form>
      <ul className="list-box">
        {todayList.map((el, idx) => {
          return <ListItem key={idx} text={el} />;
        })}
      </ul>
    </TodayListContainer>
  );
};

export default TodayList;
