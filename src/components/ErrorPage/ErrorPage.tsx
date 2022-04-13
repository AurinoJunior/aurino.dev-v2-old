import Image from "next/image";

import { Container, Footer, Header, Link } from "../_ui";

import CatNotFound from "../../assets/cat-not-found.png";

import { ErrorPageBox, ErrorPageContent } from "./ErrorPage.styles";

export const ErrorPage = () => {
  return (
    <>
      <Header />
      <Container>
        <ErrorPageBox>
          <ErrorPageContent>
            <h1>Ops, parece que você se perdeu.</h1>
            <p>Mas sem problemas volte para home ou acesse meu blog.</p>
            <Link href="/">Voltar para home</Link>
          </ErrorPageContent>
          <picture>
            <Image src={CatNotFound} alt="Um gato perdido" layout="intrinsic" />
          </picture>
        </ErrorPageBox>
      </Container>
      <Footer fixed={true} />
    </>
  );
};
