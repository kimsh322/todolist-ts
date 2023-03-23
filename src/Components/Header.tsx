import styled from "styled-components";
import TypeIt from "typeit-react";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import ModalCalender from "./MiniCalender/ModalCalender";

interface Props {
  headText: string;
  loading: boolean;
}
interface TypeitProps {
  children: string;
}
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  background-color: #408e91;

  .calender {
    position: absolute;
    cursor: pointer;
    right: 5px;
    width: 4em;
    height: 4em;
  }
`;
// typeit 폰트크기 조정
const MainHead = ({ children }: TypeitProps) => {
  return <h1 style={{ fontSize: "4em" }}>{children}</h1>;
};

const Header = ({ headText, loading }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <HeaderContainer>
      {loading ? (
        <TypeIt
          options={{
            cursor: false,
          }}
        >
          <MainHead>{headText}</MainHead>
        </TypeIt>
      ) : (
        <div></div>
      )}
      <SlCalender className="calender" onClick={() => openModalHandler()} />
      <ModalCalender isOpen={isOpen} setIsOpen={setIsOpen} />
    </HeaderContainer>
  );
};

export default Header;
