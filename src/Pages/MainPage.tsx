import styled from "styled-components";

const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: aqua;
  position: relative;
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <div>메인페이지입니당</div>
    </MainPageContainer>
  );
};

export default MainPage;
