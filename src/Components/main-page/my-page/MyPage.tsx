import styled from "styled-components";
import "animate.css";
import Weather from "./Weather";
import MyPageContents from "./MyPageContents";

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
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
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
