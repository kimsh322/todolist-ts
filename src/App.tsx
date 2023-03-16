import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import MainPage from "./Pages/MainPage";
import TodayList from "./Pages/TodayList";
import TodayEnd from "./Pages/TodayEnd";
import History from "./Pages/History";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <>
      <GlobalStyle />
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
    </>
  );
};

export default App;
