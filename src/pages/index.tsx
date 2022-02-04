import type { NextPage } from "next";

import { Container } from "../components/atoms/Container/Container.styles";
import { Header } from "../components/molecules/Header/Header";
import { Hero } from "../components/molecules/Hero/Hero";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};

export default Home;
