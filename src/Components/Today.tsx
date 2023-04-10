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
  z-index: 1;
  @media screen and (max-width: 600px) {
    width: 20%;
    height: 10%;
    top: 1px;
    right: 1px;
  }
  @media screen and (max-height: 700px) {
    height: 12%;
  }
  @media screen and (max-height: 500px) {
    height: 15%;
  }
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    width: 100%;
    .month {
      color: white;
      font-size: 2.3em;
      @media screen and (max-width: 600px) {
        font-size: 2em;
      }
    }
  }
  .day-box {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
      margin-top: 5%;
    }
  }
  .day {
    font-size: 3.3em;
    @media screen and (max-width: 600px) {
      font-size: 2em;
    }
  }
`;
// 오늘 날짜 보여주는 달력 컴포넌트
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
