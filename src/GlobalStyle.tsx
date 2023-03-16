import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin : 0;
  }

  body {
    height : 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #root{
    width : 80%;
    height:80%;
    overflow: hidden;
  }
`;

export default GlobalStyle;
