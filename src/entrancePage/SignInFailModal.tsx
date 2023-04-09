import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(128, 128, 128, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  z-index: 1;
`;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 15%;
  height: 20%;
  color: black;
  box-shadow: 2px 3px 5px 0;
  border-radius: 10px;
  padding: 1%;
  .message {
    font-size: 1.2em;
    line-height: 150%;
  }
  .confirm {
    margin-top: 10%;
    width: 100%;
    height: 22%;
    font-size: 1.2em;
    background-color: #fc2947;
    color: white;
    cursor: pointer;
  }
`;
interface Props {
  setIsFailModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInFailModal = ({ setIsFailModalOpen }: Props) => {
  const closeModalHandler = () => {
    setIsFailModalOpen(false);
  };

  return (
    <ModalContainer>
      <ModalBackdrop>
        <ModalView>
          <span className="message">유효하지 않은 아이디이거나 비밀번호가 잘못되었습니다!</span>
          <button className="confirm" onClick={closeModalHandler}>
            확 인
          </button>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
};

export default SignInFailModal;
