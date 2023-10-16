import { createGlobalStyle } from 'styled-components'

import { gray_800, gray_500, gray_900, white } from './Tokens'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${gray_900};
    color: ${white};
  }

  body,
  input,
  textarea,
  select,
  button,
  p {
    font: 400 1rem "Roboto", sans-serif;
  }

  button, input, label {
    all: unset;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  //Scroll bar
  ::-webkit-scrollbar{
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${gray_800};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${gray_500};
    border-radius: 10px;
  }
`
