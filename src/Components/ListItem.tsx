import styled from "styled-components";
import { removeTodayList } from "../store/itemSlice";
import { useAppDispatch } from "../store/reduxHooks";
import "animate.css";
import { useState } from "react";

interface Props {
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
  background-color: blueviolet;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 3em;
  animation: ${({ isRemove }: StyleProps) =>
      isRemove ? "flipOutX" : "flipInX"}
    0.5s;
  span {
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-size: 1.5em;
    height: 2em;
  }
  .remove {
    width: 10%;
    height: 80%;
    background-color: #b42a2a;
    color: white;
    position: absolute;
    right: 20px;
    &:hover {
      background-color: #831212;
    }
  }
`;

const ListItem = ({ text, idx }: Props) => {
  const dispatch = useAppDispatch();
  const [isRemove, setIsRemove] = useState<boolean>(false);
  const timeoutFunc = () => {
    dispatch(removeTodayList(idx));
    setIsRemove(false);
  };
  const handleRemoveClick = () => {
    setIsRemove(true);
    setTimeout(() => timeoutFunc(), 500);
  };
  return (
    <ItemLi isRemove={isRemove}>
      <span>{text}</span>
      <button className="remove" onClick={handleRemoveClick}>
        삭제
      </button>
    </ItemLi>
  );
};

export default ListItem;
