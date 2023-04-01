import styled from "styled-components";
import { format } from "date-fns";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";

const CalenderHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #c9eeff;
  width: 90%;
  height: 10%;
  border-radius: 10px;

  .month {
    font-size: 1.2em;
  }

  @media screen and (max-width: 900px) {
    .month {
      font-size: 0.6em;
    }
  }
  .year-box {
    position: absolute;
    left: 2%;
    font-size: 1.2em;
    display: flex;
    height: 100%;
    align-items: center;
  }
  .date {
    margin: 0 6%;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .prev-month,
  .next-month {
    background-color: transparent;
    display: flex;
    justify-content: center;
    border: none;
    cursor: pointer;
  }
`;

interface Props {
  curMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
}

const MiniCalenderHeader = ({ curMonth, prevMonth, nextMonth }: Props) => {
  return (
    <CalenderHeaderContainer>
      <div className="year-box">
        <span className="year">{format(curMonth, "yyyy")}</span>
      </div>
      <button className="prev-month" onClick={() => prevMonth()}>
        <HiArrowCircleLeft size={20} />
      </button>
      <div className="date">
        <span className="month">{format(curMonth, "M")}월</span>
      </div>
      <button className="next-month" onClick={() => nextMonth()}>
        <HiArrowCircleRight size={20} />
      </button>
    </CalenderHeaderContainer>
  );
};

export default MiniCalenderHeader;
