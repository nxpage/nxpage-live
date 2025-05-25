// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/nxpage-favicon.ico" />
        <meta name="theme-color" content="#f9f9f9" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}