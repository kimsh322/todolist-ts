import { IoMdAddCircleOutline } from "react-icons/io";
import { setTodayList } from "../store/itemSlice";
import { useAppDispatch } from "../store/reduxHooks";
import styled from "styled-components";
import useInput from "../Components/customhook/useInput";

const AddListContainer = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 10%;
  background-color: #b46060;
  border-radius: 10px 10px 0 0;
  .add-box-text {
    margin-left: 1em;
    font-size: 1.8em;
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
    width: 7%;
    height: 80%;
    background-color: #abc4aa;
    margin-right: 1em;
    border: #808080 outset 3px;
    border-radius: 10px;
    cursor: pointer;
    .add-button-img {
      font-size: 3em;
      color: black;
      aspect-ratio: auto 1 / 1;
    }
    &:active {
      border: #808080 inset 3px;
    }
  }
`;

const AddList = () => {
  const [inputTextBind, setInputText] = useInput("");
  const dispatch = useAppDispatch();
  // submit 버튼 handler
  const handleAddClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (inputTextBind.value) {
      dispatch(setTodayList(inputTextBind.value)); // item TodayList store에 저장
      setInputText("");
    }
  };

  return (
    // form 태그
    <AddListContainer>
      <span className="add-box-text">할 일 추가 : </span>
      <input className="add-input" {...inputTextBind} />
      <button className="add-button" onClick={(e) => handleAddClick(e)}>
        <IoMdAddCircleOutline className="add-button-img" />
      </button>
    </AddListContainer>
  );
};

export default AddList;
