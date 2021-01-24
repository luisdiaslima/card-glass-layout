import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.2s;
  }
  html, body, #root {
    height: 100vh;
  }
  body {
    /* background: linear-gradient(to right, #000000, #434343); */
    height: 100vh;
    background: -webkit-linear-gradient(to left bottom, #000000, #434343);
    background: linear-gradient(to left bottom, #000000, #434343);
    background-attachment: fixed;
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color:  black;
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;