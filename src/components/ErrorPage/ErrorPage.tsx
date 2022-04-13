import Image from "next/image";

import { Container, Footer, Header, Link } from "../_ui";

import { ErrorPageBox, ErrorPageContent } from "./ErrorPage.styles";

interface IErrorPageProps {
  title: string;
  description: string;
  action: {
    text: string;
    link: string;
  };
  imageData: {
    src: StaticImageData;
    alt: string;
  };
}

export const ErrorPage = ({
  title,
  description,
  action,
  imageData,
}: IErrorPageProps) => {
  return (
    <>
      <Header />
      <Container>
        <ErrorPageBox>
          <ErrorPageContent>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link href={action.link}>{action.text}</Link>
          </ErrorPageContent>
          <picture>
            <Image src={imageData.src} alt={imageData.alt} layout="intrinsic" />
          </picture>
        </ErrorPageBox>
      </Container>
      <Footer fixed={true} />
    </>
  );
};
