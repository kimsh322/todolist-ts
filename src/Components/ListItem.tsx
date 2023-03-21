import styled, { keyframes } from "styled-components";
import { removeTodayList } from "../store/itemSlice";
import { useAppDispatch } from "../store/reduxHooks";

interface Props {
  text: string;
  idx: number;
}

const animation = keyframes`
0% {
  transform: scale( 1.5 );
}
100%{
  transform: scale( 1 );
}
`;

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
  animation: ${animation} 1s cubic-bezier(0.1, -0.6, 0.2, 0);
  span {
    margin-left: 10px;
    font-size: 1.5em;
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
  const handleRemoveClick = () => {
    dispatch(removeTodayList(idx));
  };
  return (
    <ItemLi>
      <span>{text}</span>
      <button className="remove" onClick={handleRemoveClick}>
        삭제
      </button>
    </ItemLi>
  );
};

export default ListItem;
