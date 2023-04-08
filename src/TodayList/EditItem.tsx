import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { useEffect, useRef, useState } from "react";
import { updateTodayList } from "../store/itemSlice";

const EditItemForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff4e0;
  width: 30vw;
  height: 25vh;
  color: black;
  box-shadow: 2px 3px 5px 0;
  padding: 1% 1%;
  border-radius: 5px;
  z-index: 10;
  .edit-input {
    font-size: 1.5em;
    width: 100%;
    height: 70%;
    overflow-y: scroll;
    resize: none;
  }
  .edit-button {
    font-size: 1.2em;
    margin-top: 3%;
    width: 30%;
    height: 20%;
    background-color: #b46060;
    color: white;
    cursor: pointer;
  }
`;

interface Props {
  listKey: string;
  setIsEditFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface TodayList {
  key: string;
  value: string;
  done: boolean;
}

const EditItem = ({ listKey, setIsEditFormOpen }: Props) => {
  const listItem = useAppSelector((state) => state.todayList).find((el) => el.key === listKey)!; // !로 undefined 제거
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>(listItem.value);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // Edit 창이 뜨면 바로 focus 되도록 해준다.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    let newObj: TodayList = {
      key: listKey,
      value,
      done: false,
    };
    dispatch(updateTodayList(newObj));
    setIsEditFormOpen(false);
  };
  return (
    <EditItemForm>
      <textarea
        ref={inputRef}
        className="edit-input"
        onClick={(e) => e.stopPropagation()}
        value={value}
        onChange={(e) => handleChange(e)}
      ></textarea>
      <button className="edit-button" onClick={(e) => handleEdit(e)}>
        수정하기
      </button>
    </EditItemForm>
  );
};

export default EditItem;
