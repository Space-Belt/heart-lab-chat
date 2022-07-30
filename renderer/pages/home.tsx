import React from "react";
import Head from "next/head";
import Link from "next/link";
import LoginJoinPage from "../components/LoginJoin";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Heart-Lab-Chat</title>
      </Head>
      <LoginJoinPage />
    </React.Fragment>
  );
}

export default Home;
