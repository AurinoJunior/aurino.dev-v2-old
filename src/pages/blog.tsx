import type { NextPage } from "next";
import Head from "next/head";

import { Maintenance } from "../components/Maintenance/MaintenanceTemplate";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aurino Geraldo | Página em manutenção</title>
      </Head>
      <Maintenance />
    </>
  );
};

export default Blog;
