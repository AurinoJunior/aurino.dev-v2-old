import type { NextPage } from "next";
import Head from "next/head";

import { Maintenance } from "../templates/Maintenance/MaintenanceTemplate";

const Trips: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aurino Geraldo | Página em manutenção</title>
      </Head>
      <Maintenance />
    </>
  );
};

export default Trips;
