import styled from "styled-components";
import runningImg from "../img/running.jpg";
import { useState } from "react";
import SignIn from "./SignIn";

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
    p {
      color: white;
      mix-blend-mode: difference;
      font-size: 2.5em;
    }
  }
  .sign-in {
    position: absolute;
    right: 15px;
    bottom: 15px;
    width: 120px;
    height: 50px;
    font-size: 2em;
  }
`;

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <MainPageContainer>
      <div className="box">
        <p>로그인 페이지 만들면 되겠다!</p>
        <p>여기는 무슨 내용을 적을지 고민이된다.</p>
        <p>어떤걸 적으면 잘적었다고 소문이 날까 </p>
      </div>
      <button className="sign-in" onClick={handleClick}>
        회원가입
      </button>
      <SignIn isOpen={isOpen} setIsOpen={setIsOpen} />
    </MainPageContainer>
  );
};

export default MainPage;
