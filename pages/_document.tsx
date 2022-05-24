import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang={"en"}>
        <Head>
          <link rel="icon" href="/img/favicon.svg" />
          <link rel="apple-touch-icon-precomposed" href="/img/favicon.svg" />

          <link rel="preconnect" href="https://images.ctfassets.net/" />
          <link
            rel="preload"
            href="/fonts/AtlasGrotesk-Regular-Web.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/AtlasGrotesk-Medium-Web.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/HurtigrutenDisplay-CondensedBold.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/HurtigrutenHeadline-Bold.woff2"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
