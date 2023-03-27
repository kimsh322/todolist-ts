import styled from "styled-components";
import TypeIt from "typeit-react";
import { SlCalender } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import ModalCalender from "./MiniCalender/ModalCalender";

interface Props {
  headText: string;
  loading: boolean;
  isClick: boolean;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
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

  .menu {
    position: absolute;
    left: 3%;
    width: 3em;
    height: 3em;
    cursor: pointer;
  }

  .calender {
    position: absolute;
    cursor: pointer;
    right: 2%;
    width: 4em;
    height: 4em;
  }
`;
// typeit 폰트크기 조정
const MainHead = ({ children }: TypeitProps) => {
  return <h1 style={{ fontSize: "4em" }}>{children}</h1>;
};

const Header = ({ headText, loading, isClick, setIsClick }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  //NavBar on/off handler
  const navHandler = () => {
    setIsClick(!isClick);
  };

  const openModalHandler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <HeaderContainer>
      <GiHamburgerMenu className="menu" onClick={navHandler} />
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
