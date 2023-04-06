import styled from "styled-components";

interface ModalContents {
  contents: JSX.Element;
}
const TextSpan = styled.span`
  color: black;
  font-size: 1.6em;
`;
export const noListModalContents: ModalContents = {
  contents: <TextSpan>TodoList를 작성해주세요!</TextSpan>,
};

export const ConfirmListModalContents: ModalContents = {
  contents: <TextSpan>확정되었습니다!</TextSpan>,
};
