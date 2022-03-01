import { Container, Footer, Header, Contact } from "../../components";

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
        <Contact />
      </Container>
      <Footer />
    </>
  );
};
