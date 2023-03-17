import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface PropsType {
  isClick: boolean;
}

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  width: 10%;
  height: 100%;
  z-index: 1;
  left: ${(props: PropsType) => {
    return props.isClick ? "0" : "-10%";
  }};
  top: 0;
  background-color: blueviolet;
  transition: 0.5s;

  #open {
    position: absolute;
    top: 50%;
    right: -50px;
  }
  .link-to {
    width: 100%;
    height: 10%;
  }
`;

const NavBar = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const navHandler = () => {
    setIsClick(!isClick);
  };
  return (
    <NavBarContainer isClick={isClick}>
      <button id="open" onClick={navHandler}>
        누르기
      </button>
      <button className="link-to">
        <Link to="/">메인페이지</Link>
      </button>
      <button className="link-to">
        <Link to="/todayList">오늘 할 일</Link>
      </button>
      <button className="link-to">
        <Link to="/todayEnd">오늘 정산</Link>
      </button>
      <button className="link-to">
        <Link to="/history">지금까지 한 것</Link>
      </button>
    </NavBarContainer>
  );
};

export default NavBar;
