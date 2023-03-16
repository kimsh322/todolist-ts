import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import MainPage from "./Pages/MainPage";
import TodayList from "./Pages/TodayList";
import TodayEnd from "./Pages/TodayEnd";
import History from "./Pages/History";
import NavBar from "./Components/NavBar";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: relative;
`;

const App = () => {
  return (
    <MainContainer>
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/todayList" element={<TodayList />} />
          <Route path="/todayEnd" element={<TodayEnd />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </MainContainer>
  );
};

export default App;
