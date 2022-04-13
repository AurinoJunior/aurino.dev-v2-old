import type { NextPage } from "next";
import Head from "next/head";

import { HomeTemplate } from "../components/Home/HomeTemplate";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aurino Geraldo | Portifolio e blog pessoal</title>
      </Head>
      <HomeTemplate />
    </>
  );
};

export default Home;
