import { Container, Footer, Header, Contact } from "../../components/_ui";

import { About } from "./About/About";
import { Hero } from "./Hero/Hero";
import { Worked } from "./Worked/Worked";

export const HomeTemplate = () => {
  return (
    <>
      <Header />
      <Container>
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
