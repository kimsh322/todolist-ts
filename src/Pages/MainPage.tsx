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
    h2 {
      font-size: 3em;
    }
    p {
      color: white;
      mix-blend-mode: difference;
      font-size: 2em;
    }
  }
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <div className="box">
        <p>여기는 무슨 내용을 적을지 고민이된다.</p>
        <p>어떤걸 적으면 잘적었다고 소문이 날까 </p>
        <p>그냥 대문페이지는 없는게 낫나??</p>
      </div>
    </MainPageContainer>
  );
};

export default MainPage;
