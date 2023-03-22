import styled from "styled-components";
import { format } from "date-fns";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";

const CalenderHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #fff4e0;
  width: 90%;
  height: 10%;
  border-radius: 10px;

  .month {
    font-size: 3em;
  }

  @media screen and (max-width: 900px) {
    .month {
      font-size: 2em;
    }
  }
  .year-box {
    position: absolute;
    left: 5%;
    top: 40%;
    font-size: 1em;
  }
  .date {
    margin: 0 6%;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .year-box {
      display: flex;
      height: 100%;
      align-items: flex-end;
    }
  }
  .prev-month,
  .next-month {
    background-color: transparent;
    display: flex;
    justify-content: center;
    border: none;
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
        <span className="year">{format(new Date(), "yyyy")}</span>
      </div>
      <button className="prev-month" onClick={() => prevMonth()}>
        <HiArrowCircleLeft size={50} />
      </button>
      <div className="date">
        <span className="month">{format(curMonth, "M")}월</span>
      </div>
      <button className="next-month" onClick={() => nextMonth()}>
        <HiArrowCircleRight size={50} />
      </button>
    </CalenderHeaderContainer>
  );
};

export default CalenderHeader;
