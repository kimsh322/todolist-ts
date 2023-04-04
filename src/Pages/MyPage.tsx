import styled from "styled-components";
import "animate.css";
import Weather from "../Components/Weather";
import MyPageContents from "../Components/MyPageContents";

const MyPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #daf5ff;
  width: 70%;
  height: 70%;
  animation: slideInUp 1s;
  border-radius: 10px;
  overflow: hidden;
`;

const MyPage = () => {
  return (
    <MyPageContainer>
      <Weather />
      <MyPageContents />
    </MyPageContainer>
  );
};

export default MyPage;
