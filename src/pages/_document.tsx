import Document, { Html, Head, Main, NextScript } from 'next/document'

import projectInfo from '../../package.json'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.ico" />

          <meta name="version" content={projectInfo.version} />
          <meta
            property="og:description"
            content="Portifolio e blog pessoal | Aurino Junior"
          />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/32946164/200706278-ce2c301f-6e69-4c64-b79a-669288caf4f8.png"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
