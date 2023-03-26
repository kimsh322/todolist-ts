import { useState } from "react";
import add_button from "../img/add_button.png";
import { setTodayList } from "../store/itemSlice";
import { useAppDispatch } from "../store/reduxHooks";
import styled from "styled-components";

const AddListContainer = styled.form`
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
`;

const AddList = () => {
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  // submit 버튼 handler
  const handleAddClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (inputText) {
      dispatch(setTodayList(inputText)); // item TodayList store에 저장
      setInputText("");
    }
  };

  return (
    // form 태그
    <AddListContainer>
      <span className="add-box-text">할 일 추가 : </span>
      <input
        className="add-input"
        value={inputText}
        onChange={(e) => handleTextChange(e)}
      />
      <button className="add-button" onClick={(e) => handleAddClick(e)}>
        <img className="add-button-img" src={add_button} alt="add-button" />
      </button>
    </AddListContainer>
  );
};

export default AddList;
