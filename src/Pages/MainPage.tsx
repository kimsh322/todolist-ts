import styled from "styled-components";
import runningImg from "../img/running.jpg";

const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${runningImg});
  background-size: 100% 100%;
  .box {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <div className="box">
        <h2>오늘은 3월 18일 입니다.</h2>
        <p>오늘 서울 날씨는 맑음</p>
        <p>최저온도 10도, 최고온도 20도 입니다.</p>
        <p>지금까지 작성한 TodoList는 총 10개입니다!</p>
        <p>오늘도 열심히 달려봅시다!</p>
      </div>
    </MainPageContainer>
  );
};

export default MainPage;
