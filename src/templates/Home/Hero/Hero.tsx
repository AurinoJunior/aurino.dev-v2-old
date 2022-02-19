import React, { useEffect, useState } from "react";
import Image from "next/image";

import myImage from "../../../assets/eu.png";

import { Box, Content, Title, Subtitle, HeroAnimation } from "./Hero.styles";
import { Link } from "../../../components/atoms/Actions/Actions";

export const Hero = () => {
  const [textAnimation, setTextAnimation] = useState("");

  useEffect(() => {
    setTimeout(() => typingAnimation(), 1000);
  }, []);

  const typingAnimation = () => {
    const phrase = "web developer";

    phrase.split("").forEach((leter, i) => {
      setTimeout(() => {
        setTextAnimation((oldText) => oldText + leter);
      }, 100 * i);
    });
  };

  return (
    <Box>
      <Image
        src={myImage}
        alt="Aurino Junior imagem"
        width={270}
        height={193}
      />
      <Content>
        <p className="hero__context">🚀 Salve meu nome é:</p>
        <Title className="hero__title">Aurino Junior</Title>
        <Subtitle className="hero__subtitle">
          Eu sou <HeroAnimation>{textAnimation}</HeroAnimation>
        </Subtitle>
        <p className="hero__description">
          Atualmente sou desenvolvedor de software frontend e ...
        </p>
        <Link href="#about">Leia mais</Link>
      </Content>
    </Box>
  );
};
