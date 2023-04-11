import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { useEffect, useRef } from "react";
import { updateTodayList } from "../store/itemSlice";
import useInput from "../components/customhook/useInput";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(128, 128, 128, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  z-index: 2;
`;

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
  @media screen and (max-width: 600px) {
    width: 50vw;
    height: 30vh;
  }
  .edit-input {
    font-size: 1.5em;
    width: 100%;
    height: 70%;
    overflow-y: scroll;
    resize: none;
    @media screen and (max-width: 600px) {
      font-size: 2em;
    }
  }
  .edit-button {
    font-size: 1.2em;
    margin-top: 3%;
    width: 30%;
    height: 20%;
    background-color: #b46060;
    color: white;
    cursor: pointer;
    @media screen and (max-width: 600px) {
      width: 40%;
      font-size: 1.5em;
    }
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
  const [textBind] = useInput(listItem.value);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // Edit 창이 뜨면 바로 focus 되도록 해준다.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    let newObj: TodayList = {
      key: listKey,
      value: textBind.value,
      done: false,
    };
    dispatch(updateTodayList(newObj));
    setIsEditFormOpen(false);
  };
  return (
    <ModalBackdrop onClick={() => setIsEditFormOpen(false)}>
      <EditItemForm onClick={(e) => e.stopPropagation()}>
        <textarea ref={inputRef} className="edit-input" {...textBind}></textarea>
        <button className="edit-button" onClick={(e) => handleEdit(e)}>
          수정하기
        </button>
      </EditItemForm>
    </ModalBackdrop>
  );
};

export default EditItem;
