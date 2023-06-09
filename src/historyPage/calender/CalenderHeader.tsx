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
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 10%;
  }
  .month {
    font-size: 3.3em;
  }
  .year-box {
    position: absolute;
    left: 1%;
    top: 40%;
    font-size: 1.8em;
    display: flex;
    @media screen and (max-width: 600px) {
      left: 3%;
      .year {
        font-size: 1.5em;
      }
    }
  }
  .date {
    margin: 0 6%;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .prev-month {
    background-color: transparent;
    display: flex;
    justify-content: center;
    border: none;
    cursor: pointer;
    .left-arrow {
      font-size: 3.5em;
      @media screen and (max-width: 600px) {
        margin-top: 20%;
      }
    }
  }
  .next-month {
    background-color: transparent;
    display: flex;
    justify-content: center;
    border: none;
    cursor: pointer;
    .right-arrow {
      font-size: 3.5em;
      @media screen and (max-width: 600px) {
        margin-top: 20%;
      }
    }
  }
`;

interface Props {
  curMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
}

const CalenderHeader = ({ curMonth, prevMonth, nextMonth }: Props) => {
  return (
    <CalenderHeaderContainer>
      <div className="year-box">
        <span className="year">{format(curMonth, "yyyy")}</span>
      </div>
      <button className="prev-month" onClick={() => prevMonth()}>
        <HiArrowCircleLeft className="left-arrow" />
      </button>
      <div className="date">
        <span className="month">{format(curMonth, "M")}월</span>
      </div>
      <button className="next-month" onClick={() => nextMonth()}>
        <HiArrowCircleRight className="right-arrow" />
      </button>
    </CalenderHeaderContainer>
  );
};

export default CalenderHeader;
