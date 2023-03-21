import styled from "styled-components";
import Calender from "../Components/Calender/Calender";

const HistoryContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff4e0;
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
