import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "./router";

interface StylePropsType {
  isClick: boolean;
}
interface Props {
  setHeadText: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  width: 10%;
  height: 100%;
  z-index: 1;
  left: ${(props: StylePropsType) => {
    return props.isClick ? "0" : "-10%";
  }};
  top: 0;
  background-color: blueviolet;
  transition: 0.5s;

  a {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
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

const NavBar = ({ setHeadText, setLoading, loading }: Props) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  //NavBar on/off handler
  const navHandler = () => {
    setIsClick(!isClick);
  };

  const handleLinkClick = (e: React.BaseSyntheticEvent) => {
    setIsClick(false);
    // Typeit text 삽입 코드
    const head: string = e.target.innerText;
    if (head === "메인페이지") setHeadText("TodoList");
    else setHeadText(head);
    setLoading(!loading);
    setTimeout(() => {
      setLoading((isloading) => !isloading); // 콜백함수로 setState 사용하기!
    }, 500);
  };

  return (
    <NavBarContainer isClick={isClick}>
      <button id="open" onClick={navHandler}>
        누르기
      </button>
      {routes.map((el) => {
        return (
          <button
            key={el.path}
            className="link-to"
            onClick={(e) => handleLinkClick(e)}
          >
            <Link to={el.path}>{el.name}</Link>
          </button>
        );
      })}
    </NavBarContainer>
  );
};

export default NavBar;
