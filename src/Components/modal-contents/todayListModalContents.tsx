import styled from "styled-components";

interface ModalContents {
  contents: JSX.Element;
}
const TextSpan = styled.span`
  color: black;
  font-size: 1.6em;
`;
export const confirmListModalContents: ModalContents = {
  contents: <TextSpan>확정되었습니다!</TextSpan>,
};

export const noListModalContents: ModalContents = {
  contents: (
    <TextSpan>
      TodoList를
      <br /> 작성해주세요!
    </TextSpan>
  ),
};

export const requireSignin: ModalContents = {
  contents: <TextSpan>로그인 해주세요!</TextSpan>,
};

export const listStored: ModalContents = {
  contents: <TextSpan>저장되었습니다!</TextSpan>,
};
