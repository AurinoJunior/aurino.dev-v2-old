import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { darkTheme } from "../styles/Themes";

import { GlobalStyle } from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
