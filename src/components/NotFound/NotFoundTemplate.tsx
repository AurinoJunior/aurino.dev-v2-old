import { Container, Footer, Header, Link } from "../_ui";
import Image from "next/image";

import CatNotFound from "../../assets/cat-not-found.png";

import { Box, Content, ImageContainer } from "./NotFoundTemplate.styles";

export const NotFoundTemplate = () => {
  return (
    <>
      <Header />
      <Container>
        <Box>
          <Content>
            <h1>Ops, parece que você se perdeu.</h1>
            <p>Mas sem problemas volte para home ou acesse meu blog.</p>
            <Link href="/">Voltar para home</Link>
          </Content>
          <ImageContainer>
            <Image src={CatNotFound} alt="Um gato perdido" layout="intrinsic" />
          </ImageContainer>
        </Box>
      </Container>
      <Footer fixed={true} />
    </>
  );
};
