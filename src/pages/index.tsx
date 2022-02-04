import type { NextPage } from "next";

import { Container } from "../components/atoms/Container/Container.styles";
import { Header } from "../components/molecules/Header/Header";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;
