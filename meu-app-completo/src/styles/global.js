import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* background: #C8C8C8; */
  }

  html, body, #root{
    height: 100vh;
    width: 100%;
  }

  body, input, button {
    font: 16px sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root{
    width: 100%;
    margin: 0;
  }
`;