import styled from "styled-components";

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: orange;
  width: 100%;
  height: 100%;
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
      <p>마이페이지에는 뭘 넣지</p>
      <p>날씨 기능 시간남으면 넣기</p>
      <p>로그아웃 기능 넣어야함</p>
      <p>지금까지 작성한 todolist 개수 넣기</p>
    </MyPageContainer>
  );
};

export default MyPage;
