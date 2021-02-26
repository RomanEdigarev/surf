import React from "react";
import AppBody from "../appBody/AppBody";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>SURF</title>
      </Head>
      <AppBody />
    </>
  );
};

export default HomePage;
