import { createGlobalStyle } from "styled-components";
import flowers from "./img/flowers.jpg";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin : 0;
    font-family: 'KOTRAHOPE';
  }
  @media screen and (max-width: 600px) {
    * {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 400px) {
    * {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 300px) {
    * {
      font-size: 10px;
    }
  }
  @media screen and (max-height: 500px) {
    * {
      font-size: 8px;
    }
  }
  @font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  body {
    height : 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    background-image: url(${flowers});
    background-size : 100% 120%;
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
  @media screen and (max-width: 600px) {
    #root {
      width: 100%;
      height : 100%;
    }
  }
`;

export default GlobalStyle;
