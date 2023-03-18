import { useLocation, useOutlet } from "react-router-dom";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import styled from "styled-components";

import { routes } from "./Components/router";
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

  .fade {
    width: 100%;
    height: 85%;
  }
  .fade-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: all 0.5s ease-in;
  }

  .fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.5s ease-in;
  }
`;

const App = () => {
  const [headText, setHeadText] = useState<string>("TodoList");
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <MainContainer>
      <Header headText={headText} loading={loading} />
      <NavBar
        setHeadText={setHeadText}
        setLoading={setLoading}
        loading={loading}
      />
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
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
