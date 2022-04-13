import { Container, Footer, Header, Link } from "../_ui";
import Image from "next/image";

import CatMaintenance from "../../assets/cat-maintenance.png";

import { Box, Content, ImageContainer } from "./Maintenance.styles";

export const Maintenance = () => {
  return (
    <>
      <Header />
      <Container>
        <Box>
          <Content>
            <h1>Opa, essa pagina ainda está em construção.</h1>
            <p>Mas em quanto isso de uma olhada em minha homepage.</p>
            <Link href="/">Voltar para home</Link>
          </Content>
          <ImageContainer>
            <Image
              src={CatMaintenance}
              alt="Um gato perdido"
              layout="intrinsic"
            />
          </ImageContainer>
        </Box>
      </Container>
      <Footer fixed={true} />
    </>
  );
};
