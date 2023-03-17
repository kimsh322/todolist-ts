import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import TodayList from "../Pages/TodayList";
import TodayEnd from "../Pages/TodayEnd";
import History from "../Pages/History";
import styled from "styled-components";

const TransitionDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  .fade-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: all 1s ease-in;
  }

  .fade-exit {
    opacity: 1;
    transform: translateY(-100%);
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateY(0%);
    transition: all 1s ease-in;
  }
  .transition-group {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

const Transition = () => {
  const location = useLocation();
  return (
    <TransitionDiv>
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} classNames="fade" timeout={1500}>
          <Routes location={location}>
            <Route path="/" element={<MainPage />} />
            <Route path="/todayList" element={<TodayList />} />
            <Route path="/todayEnd" element={<TodayEnd />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </TransitionDiv>
  );
};

export default Transition;
