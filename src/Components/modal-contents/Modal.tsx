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
  z-index: 99;
`;

const ModalView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 15%;
  height: 15%;
  color: black;
  box-shadow: 2px 3px 5px 0;
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    width: 50%;
    height: 15%;
    font-size: 1.5em;
  }
`;

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  contents: JSX.Element;
}

const Modal = (props: Props) => {
  const { isOpen, setIsOpen, contents } = props;
  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <ModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={closeModalHandler}>
          <ModalView>{contents}</ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default Modal;
