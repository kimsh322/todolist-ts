import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import styled from "styled-components";
import Transition from "./Components/Transition";

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
        <Transition />
      </Router>
    </MainContainer>
  );
};

export default App;
