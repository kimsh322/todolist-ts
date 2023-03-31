import { subMonths, addMonths } from "date-fns";
import { useState } from "react";
import styled from "styled-components";
import CalenderDays from "./CalenderDays";
import CalenderHeader from "./CalenderHeader";
import CalenderWeek from "./CalenderWeek";

const CalenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Calender = () => {
  const [curMonth, setCurMonth] = useState(new Date());

  const prevMonth = () => {
    setCurMonth(subMonths(curMonth, 1));
  };
  const nextMonth = () => {
    setCurMonth(addMonths(curMonth, 1));
  };

  return (
    <CalenderContainer>
      <CalenderHeader curMonth={curMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
      <CalenderWeek />
      <CalenderDays curMonth={curMonth} />
    </CalenderContainer>
  );
};
export default Calender;
