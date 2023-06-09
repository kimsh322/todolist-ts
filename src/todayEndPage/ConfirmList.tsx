import styled from "styled-components";
import { useState } from "react";

const ItemLi = styled.li`
  list-style: none;
  position: relative;
  margin: 10px 10px 10px 50px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  border-width: 3px;
  border-style: solid;
  border-color: ${(props: StyleProps) => (props.isChecked ? "green" : "transparent")};

  .checkbox {
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
  .text-box {
    display: flex;
    width: 85%;
    align-items: center;
    margin-left: 10px;
    font-size: 1.8em;
  }
`;

interface Props {
  text: string;
  idx: number;
  setTodayConfirmList: React.Dispatch<React.SetStateAction<TodayListArr>>;
  todayConfirmList: TodayListArr;
}
interface StyleProps {
  isChecked: boolean;
}

interface TodayList {
  key: string;
  value: string;
  done: boolean;
}
type TodayListArr = TodayList[];

const ConfirmList = ({ text, idx, todayConfirmList, setTodayConfirmList }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
    let newArr = todayConfirmList.map((el, index) => {
      if (idx === index) el.done = !el.done;
      return el;
    });
    setTodayConfirmList(newArr);
  };
  return (
    <ItemLi isChecked={isChecked}>
      <div className="text-box">{text}</div>
      <input type="checkbox" className="checkbox" onChange={() => handleChange()} />
    </ItemLi>
  );
};

export default ConfirmList;
