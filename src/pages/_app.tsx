import type { AppProps } from 'next/app'
import Script from 'next/script'

import { GlobalStyle } from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-V2LBQB6TKD"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-V2LBQB6TKD');
        `}
      </Script>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
