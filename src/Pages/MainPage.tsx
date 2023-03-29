import styled from "styled-components";
import { useState } from "react";
import SignIn from "./SignIn";
import Login from "../Components/Login";
import MyPage from "./MyPage";
import { useAppSelector } from "../store/reduxHooks";

const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #daf5ff;

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
`;

const MainPage = () => {
  const isSignIn = useAppSelector((state) => state.isSignIn);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainPageContainer>
      {isSignIn ? <MyPage /> : <Login setIsOpen={setIsOpen} />}
      <SignIn isOpen={isOpen} setIsOpen={setIsOpen} />
    </MainPageContainer>
  );
};

export default MainPage;
