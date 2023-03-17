import styled from "styled-components";

const TodayListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: yellow;
  position: relative;
`;

const TodayList = () => {
  return <TodayListContainer></TodayListContainer>;
};

export default TodayList;
