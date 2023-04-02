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
  font-size: 1.5em;
  width: 15%;
  height: 15%;
  color: black;
  box-shadow: 2px 3px 5px 0;
  border-radius: 3px;
`;

interface Props {
  isFailModalOpen: boolean;
  setIsFailModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsNoListFailModal = ({ isFailModalOpen, setIsFailModalOpen }: Props) => {
  const closeModalHandler = () => {
    setIsFailModalOpen(false);
  };

  return (
    <ModalContainer>
      {isFailModalOpen ? (
        <ModalBackdrop onClick={closeModalHandler}>
          <ModalView>
            <span>TodoList를</span>
            <span>작성해주세요!</span>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default IsNoListFailModal;
