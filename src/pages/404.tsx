import type { NextPage } from "next";
import Head from "next/head";

import { NotFoundTemplate } from "../templates/NotFound/NotFoundTemplate";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aurino Geraldo | Pagina não encontrada</title>
      </Head>
      <NotFoundTemplate />
    </>
  );
};

export default Custom404;
