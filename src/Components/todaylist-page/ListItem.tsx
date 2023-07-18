import styled from "styled-components";
import { removeTodayList } from "../../store/itemSlice";
import { useAppDispatch } from "../../store/reduxHooks";
import "animate.css";
import { useState } from "react";
import { TbXboxX } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import EditItem from "./EditItem";

interface Props {
  listKey: string;
  text: string;
  idx: number;
}
interface StyleProps {
  isRemove: boolean;
}

const ItemLi = styled.li`
  list-style: none;
  position: relative;
  margin: 10px 10px 10px 50px;
  border-radius: 10px;
  background-color: #fff4e0;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.2em 0;
  animation: ${({ isRemove }: StyleProps) => (isRemove ? "flipOutX" : "flipInX")} 0.5s;
  @media screen and (max-width: 600px) {
    margin-left: 20px;
  }
  .text-box {
    display: flex;
    width: 80%;
    align-items: center;
    margin-left: 10px;
    font-size: 1.8em;
    @media screen and (max-width: 600px) {
      height: 100%;
      font-size: 2em;
    }
  }
  .edit {
    position: absolute;
    right: 7.5%;
    font-size: 1.5em;
    cursor: pointer;
    @media screen and (max-width: 600px) {
      font-size: 2em;
      right: 10%;
    }
  }
  .remove {
    font-size: 1.5em;
    background-color: transparent;
    color: red;
    position: absolute;
    right: 1%;
    &:hover {
      cursor: pointer;
    }
    @media screen and (max-width: 600px) {
      font-size: 2em;
    }
  }
`;

const ListItem = ({ listKey, text, idx }: Props) => {
  const dispatch = useAppDispatch();
  const [isRemove, setIsRemove] = useState<boolean>(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditFormOpen(true);
  };

  const handleRemoveClick = () => {
    setIsRemove(true);
    setTimeout(() => timeoutFunc(), 500);
  };
  const timeoutFunc = () => {
    dispatch(removeTodayList(idx));
    setIsRemove(false);
  };

  return (
    <ItemLi isRemove={isRemove}>
      <div className="text-box">{text}</div>
      <FiEdit className="edit" onClick={handleEditClick} />
      <TbXboxX className="remove" onClick={handleRemoveClick} />
      {isEditFormOpen ? <EditItem listKey={listKey} setIsEditFormOpen={setIsEditFormOpen} /> : null}
    </ItemLi>
  );
};

export default ListItem;
