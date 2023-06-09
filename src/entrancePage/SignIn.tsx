import styled from "styled-components";
import CreateId from "./CreateId";

const SignInContainer = styled.div`
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 25%;
  height: 60%;
  color: black;
  box-shadow: 2px 3px 5px 0;
  border-radius: 3px;
  @media screen and (max-width: 600px) {
    width: 80%;
    height: 60%;
  }
`;

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn = ({ isOpen, setIsOpen }: Props) => {
  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <SignInContainer>
      {isOpen ? (
        <ModalBackdrop onClick={closeModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <CreateId />
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </SignInContainer>
  );
};

export default SignIn;
