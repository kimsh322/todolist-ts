import styled from "styled-components";

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: orange;
  width: 100%;
  height: 100%;
  p {
    font-size: 3em;
  }
`;

const MyPage = () => {
  return (
    <MyPageContainer>
      <p>마이페이지에는 뭘 넣지</p>
      <p>고민이 된다</p>
    </MyPageContainer>
  );
};

export default MyPage;
