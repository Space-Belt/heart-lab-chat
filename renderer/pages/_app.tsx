import React from "react";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { LJProvider } from "../context/LoginJoin";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LJProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>채팅앱</title>
      </Head>
      <Component {...pageProps} />
    </LJProvider>
  );
}

export default MyApp;
