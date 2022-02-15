import { Container } from "../../atoms/Container/Container.styles";

import { Header } from "../../molecules/Header/Header";

import { About } from "./About/About";
import { Hero } from "./Hero/Hero";
import { Worked } from "./Worked/Worked";

export const HomeTemplate = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
      </Container>

      <Worked />

      <Container>
        <About />
      </Container>
    </>
  );
};