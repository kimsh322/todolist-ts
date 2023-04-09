import styled from "styled-components";
import TypeIt from "typeit-react";
import { BsCalendarCheck } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import ModalCalender from "./miniCalender/ModalCalender";

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
  background-color: #aa77ff;
  border: 2px solid black;
  border-radius: 10px 10px 0 0;
  padding-bottom: 1.5%;
  position: relative;
  .menu {
    position: absolute;
    left: 3%;
    bottom: 22%;
    width: 3em;
    height: 3em;
    cursor: pointer;
  }

  .calender {
    position: absolute;
    cursor: pointer;
    right: 2%;
    bottom: 15%;
    font-size: 4em;
    color: black;
  }
`;
// typeit 폰트크기 조정
const MainHead = ({ children }: TypeitProps) => {
  return <h1 style={{ fontSize: "4.5em" }}>{children}</h1>;
};

// 헤더 컴포넌트
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
      <BsCalendarCheck className="calender" onClick={() => openModalHandler()} />
      <ModalCalender isOpen={isOpen} setIsOpen={setIsOpen} />
    </HeaderContainer>
  );
};

export default Header;
