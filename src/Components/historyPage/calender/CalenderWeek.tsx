import styled from "styled-components";

const WeekContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 5%;
  background-color: #ffbf9b;
  padding: 0 1%;
  margin-left: 0;
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  .week {
    width: 13%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #ffbf9b;
  }
`;

const CalenderWeek = () => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <WeekContainer>
      {week.map((el, idx) => {
        return (
          <div key={idx} className="week">
            {el}
          </div>
        );
      })}
    </WeekContainer>
  );
};

export default CalenderWeek;
