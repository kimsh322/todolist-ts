import styled from "styled-components";
import format from "date-fns/format";

const TodayContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: beige;
  width: 12%;
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 3px 5px 0;
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    width: 100%;
    .month {
      color: white;
      font-size: 2em;
    }
  }
  .day-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .day {
    font-size: 3em;
  }
`;

const Today = () => {
  return (
    <TodayContainer>
      <div className="top">
        <span className="month"> {format(new Date(), "MMM")}</span>
      </div>
      <div className="day-box">
        <span className="day">{format(new Date(), "d")}</span>
      </div>
    </TodayContainer>
  );
};

export default Today;
