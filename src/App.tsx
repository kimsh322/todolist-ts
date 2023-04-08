import { useLocation, useOutlet } from "react-router-dom";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import styled from "styled-components";
import { routes } from "./Router/router";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useState } from "react";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 900px) {
    width: 100%;
  }

  .fade {
    width: 100%;
    height: 85%;
    border: 2px solid black;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
  }
  .fade-enter {
    opacity: 0;
    transform: rotate3d(1, 0, 0, -1.57rad);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: all 0.5s ease-in;
  }

  .fade-exit {
    opacity: 1;
    /* transform: translateX(0%); */
  }

  .fade-exit-active {
    opacity: 0;
    transform: rotate3d(1, 0, 0, 1.57rad);
    transition: all 0.5s ease-in;
  }
`;

const App = () => {
  const location = useLocation();
  let initialHeadText: string = "TodoList";
  for (let el of routes) {
    if (el.path === location.pathname) {
      initialHeadText = el.name;
      break;
    }
  }
  const [headText, setHeadText] = useState<string>(initialHeadText);
  const [loading, setLoading] = useState<boolean>(true);
  const [isClick, setIsClick] = useState<boolean>(false);
  const currentOutlet = useOutlet();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};

  // 다른데 클릭하면 NavBar 닫기
  const handleNavBar = () => {
    if (isClick) setIsClick(false);
  };
  return (
    <MainContainer onClick={handleNavBar}>
      <Header headText={headText} loading={loading} isClick={isClick} setIsClick={setIsClick} />
      <NavBar
        setHeadText={setHeadText}
        setLoading={setLoading}
        loading={loading}
        isClick={isClick}
        setIsClick={setIsClick}
      />
      <SwitchTransition>
        <CSSTransition key={location.pathname} nodeRef={nodeRef} timeout={500} classNames="fade" unmountOnExit>
          {(state) => (
            <div ref={nodeRef} className="fade">
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </MainContainer>
  );
};

export default App;
