import styled from "styled-components";
import { VscCheck, VscClose } from "react-icons/vsc";

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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffb4b4;
  width: 30%;
  height: 50%;
  color: black;
  box-shadow: 2px 3px 5px 0;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  .list-box {
    padding: 5%;
    width: 100%;
    height: 50%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .item-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      list-style: none;
      font-size: 1.5em;
      margin-bottom: 1%;
      .list-text {
        width: 85%;
        @media screen and (max-width: 600px) {
          font-size: 1em;
        }
      }
      .done {
        color: green;
      }
      .fail {
        color: red;
      }
    }
  }
  .memo {
    padding: 5%;
    width: 100%;
    height: 50%;
    background-color: #ffdeb4;
    font-size: 1.5em;
    overflow-y: scroll;
    border-radius: 0 0 10px 10px;
    white-space: pre-line;
    word-wrap: break-word;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

interface ItemList {
  key: string;
  value: string;
  done: boolean;
}
interface EachDataObj {
  memo: string;
  list: ItemList[];
}

interface Props {
  curDayData: EachDataObj;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalenderDataModal = ({ curDayData, setIsModalOpen }: Props) => {
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const newLine = (text: string) => {
    text = text.replace(/(<br>|<br\/>|<br \/>)/g, "\r\n");
    return text;
  };

  return (
    <ModalContainer>
      <ModalBackdrop onClick={closeModalHandler}>
        <ModalView onClick={(e) => e.stopPropagation()}>
          <ul className="list-box">
            {curDayData.list.map((el) => {
              return (
                <li key={el.key} className="item-list">
                  <div className="list-text">{el.value}</div>
                  {el.done ? <VscCheck className="done" /> : <VscClose className="fail" />}
                </li>
              );
            })}
          </ul>
          <p className="memo">{newLine(curDayData.memo)}</p>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
};

export default CalenderDataModal;
