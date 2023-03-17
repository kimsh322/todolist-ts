import styled from "styled-components";

const TodayEndContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: red;
  position: relative;
`;

const TodayEnd = () => {
  return <TodayEndContainer></TodayEndContainer>;
};

export default TodayEnd;
