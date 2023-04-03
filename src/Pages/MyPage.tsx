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
  .left-box {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    padding: 3% 0 0 1%;
    background-color: #b9e9fc;
  }
  .right-box {
    width: 70%;
    height: 100%;
    background-color: white;
  }
`;

const MyPage = () => {
  return (
    <MyPageContainer>
      <div className="left-box">
        <Weather />
      </div>
      <div className="right-box">
        <MyPageContents />
      </div>
    </MyPageContainer>
  );
};

export default MyPage;
