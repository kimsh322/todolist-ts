import styled from "styled-components";
import Calender from "./Calender/Calender";

const HistoryContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c9eeff;
  position: relative;
`;

const History = () => {
  return (
    <HistoryContainer>
      <Calender />
    </HistoryContainer>
  );
};

export default History;
