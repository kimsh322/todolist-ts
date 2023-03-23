import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin : 0;
  }
  @media screen and (max-width: 900px) {
    * {
      font-size: 12px;
    }
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
    display: flex;
    justify-content: center;
  }
  @media screen and (max-height: 600px) {
    #root {
      height: 100%;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 900px) {
    #root {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
