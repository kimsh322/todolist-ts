import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { routes } from "./router";
import catImg from "../img/cat.jpg";

interface StylePropsType {
  isClick: boolean;
}
interface Props {
  setHeadText: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  isClick: boolean;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  position: absolute;
  width: 15%;
  height: 100%;
  z-index: 1;
  left: ${(props: StylePropsType) => {
    return props.isClick ? "0" : "-15%";
  }};
  top: 0;
  background-color: #67eaff;
  transition: 0.5s;
  border-radius: 10px;
  overflow: hidden;
  .cat {
    cursor: pointer;
  }
  .link-to {
    border: none;
    width: 100%;
    height: 15%;
    background-color: #67eaff;
    &:hover {
      background-color: #19a7ce;
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-size: 2em;
`;

const NavBar = ({
  setHeadText,
  setLoading,
  loading,
  isClick,
  setIsClick,
}: Props) => {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.BaseSyntheticEvent) => {
    setIsClick(false);
    // Typeit text 삽입 코드
    const head: string = e.target.innerText;
    setHeadText(head);
    setLoading(!loading);
    setTimeout(() => {
      setLoading((isloading) => !isloading); // 콜백함수로 setState 사용하기!
    }, 500);
  };

  return (
    <NavBarContainer isClick={isClick}>
      <img
        src={catImg}
        alt="cat"
        className="cat"
        onClick={() => navigate("/")}
      />
      {routes.map((el) => {
        return (
          <button
            key={el.path}
            className="link-to"
            onClick={(e) => handleLinkClick(e)}
          >
            <StyledLink to={el.path}>{el.name}</StyledLink>
          </button>
        );
      })}
    </NavBarContainer>
  );
};

export default NavBar;
