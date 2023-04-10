import MiniCalender from "./MiniCalender";
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
  z-index: 2;
`;

const ModalView = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #c9eeff;
  width: 20%;
  height: 30%;
  border-radius: 20px;
  color: black;
  box-shadow: 2px 3px 5px 0;
  @media screen and (max-width: 600px) {
    width: 70%;
    height: 35%;
  }
`;

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCalender = ({ isOpen, setIsOpen }: Props) => {
  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <ModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={closeModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <MiniCalender />
          </ModalView>
        </ModalBackdrop>
      ) : (
        ""
      )}
    </ModalContainer>
  );
};

export default ModalCalender;
