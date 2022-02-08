import { createGlobalStyle } from "styled-components";

import { ITheme } from "./Themes";

type Props = {
  theme: ITheme;
};

export const GlobalStyle = createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
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
`;
