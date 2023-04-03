import styled from "styled-components";
import "animate.css";
import Weather from "../Components/Weather";

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #daf5ff;
  width: 100%;
  height: 100%;
  animation: slideInDown 1s;
  .cat-img {
    width: 30%;
  }
  p {
    font-size: 3em;
  }
`;

const MyPage = () => {
  return (
    <MyPageContainer>
      <Weather />
    </MyPageContainer>
  );
};

export default MyPage;
