import styled from "styled-components";
import { useState, useEffect } from "react";
import SignIn from "./SignIn";
import Login from "../Components/Login";
import MyPage from "./MyPage";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { changeToSignIn } from "../store/logSlice";

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
  const apiKey = process.env.REACT_APP_apiKey;
  const dispatch = useAppDispatch();
  // 세션 스토리지에 로그인 기록이 있으면 가져온다.
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  useEffect(() => {
    if (is_session) {
      dispatch(changeToSignIn());
    }
  }, []);

  return (
    <MainPageContainer>
      {isSignIn ? <MyPage /> : <Login setIsOpen={setIsOpen} />}
      <SignIn isOpen={isOpen} setIsOpen={setIsOpen} />
    </MainPageContainer>
  );
};

export default MainPage;
