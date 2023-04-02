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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 15%;
  height: 15%;
  color: black;
  box-shadow: 2px 3px 5px 0;
  border-radius: 10px;
  .text {
    font-size: 1.6em;
  }
`;

interface Props {
  setIsFailModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodayEndFailModal = ({ setIsFailModalOpen }: Props) => {
  return (
    <ModalContainer>
      <ModalBackdrop onClick={() => setIsFailModalOpen(false)}>
        <ModalView>
          <span className="text">로그인 하세요!</span>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
};

export default TodayEndFailModal;
