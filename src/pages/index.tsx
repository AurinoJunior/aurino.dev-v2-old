import type { NextPage } from "next";

import { Logo } from "../components/atoms/Logo/Logo";
import { Container } from "../components/atoms/Container/Container.styles";

const Home: NextPage = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default Home;
