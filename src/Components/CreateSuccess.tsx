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
  justify-content: center;
  align-items: center;
  position: absolute;
  padding-left: 1%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #c9eeff;
  width: 50%;
  height: 20%;
  font-size: 1.5em;
  border-radius: 20px;
  color: black;
  box-shadow: 2px 3px 5px 0;
`;
interface Props {
  createSuccess: boolean;
  setCreateSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateSuccess = ({ createSuccess, setCreateSuccess }: Props) => {
  const closeModalHandler = () => {
    setCreateSuccess(false);
  };

  return (
    <ModalContainer>
      {createSuccess ? (
        <ModalBackdrop onClick={closeModalHandler}>
          <ModalView>
            회원 가입이 <br />
            완료되었습니다!
          </ModalView>
        </ModalBackdrop>
      ) : (
        ""
      )}
    </ModalContainer>
  );
};

export default CreateSuccess;
