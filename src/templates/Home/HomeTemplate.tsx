import { Container } from "../../components/atoms/Container/Container.styles";
import { Footer } from "../../components/atoms/Footer/Footer";

import { Header } from "../../components/molecules/Header/Header";

import { About } from "./About/About";
import { Hero } from "./Hero/Hero";
import { Skillset } from "./Skillset/Skillset";
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
        <Skillset />
      </Container>
      <Footer />
    </>
  );
};
