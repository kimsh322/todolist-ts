import styled from "styled-components";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
} from "date-fns";

const DaysContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
  .week {
    margin-left: 1%;
    display: flex;
    width: 100%;
    height: 20%;
    margin-bottom: 0.1%;
    .cell {
      margin: 0.1%;
      width: 14%;
      height: 100%;
      background-color: #fff4e0;
      border: 0.5px solid black;
      font-size: 1.2em;
      span {
        color: black;
      }
      .not-valid {
        opacity: 0.2;
      }
    }
    .today {
      border: 1px solid red;
      background-color: #ffbf9b;
    }
  }
`;

interface Props {
  curMonth: Date;
  selectedDate: Date;
}

const CalenderDays = ({ curMonth, selectedDate }: Props) => {
  const startMonth = startOfMonth(curMonth);
  const endMonth = endOfMonth(startMonth);
  const startDate = startOfWeek(startMonth);
  const endDate = endOfWeek(endMonth);

  const cells = [];
  let week = [];
  let day = startDate;
  let formatDate = "";
  let key = 0;

  const isToday = (a: Date, b: Date) => {
    return (
      format(a, "d") === format(b, "d") &&
      format(a, "M") === format(new Date(), "M") &&
      format(a, "M") === format(b, "M") &&
      format(a, "Y") === format(new Date(), "Y")
    );
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formatDate = format(day, "d");
      week.push(
        <div
          key={formatDate}
          className={`cell ${isToday(curMonth, day) ? "today" : ""}`}
        >
          <span
            className={
              format(curMonth, "M") !== format(day, "M") ? "not-valid" : ""
            }
          >
            {formatDate}
          </span>
        </div>
      );
      day = addDays(day, 1);
    }
    cells.push(
      <div className="week" key={++key}>
        {week}
      </div>
    );
    week = [];
  }

  return <DaysContainer>{cells}</DaysContainer>;
};

export default CalenderDays;
