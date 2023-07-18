import styled from "styled-components";
import Calender from "../components/historyPage/calender/Calender";

const HistoryPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c9eeff;
  position: relative;
`;

const HistoryPage = () => {
  return (
    <HistoryPageContainer>
      <Calender />
    </HistoryPageContainer>
  );
};

export default HistoryPage;
