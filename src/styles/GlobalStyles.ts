import { createGlobalStyle } from "styled-components";

import { ITheme } from "./Themes";
import { gray_800, gray_500 } from "./Tokens";

type Props = {
  theme: ITheme;
};

export const GlobalStyle = createGlobalStyle<Props>`
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
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }


  body,
  input,
  textarea,
  select,
  button,
  p {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
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
  }

  ::-webkit-scrollbar-thumb {
    background: ${gray_500};
  }
`;
