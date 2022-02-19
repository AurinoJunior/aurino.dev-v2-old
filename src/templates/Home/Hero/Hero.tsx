import React, { useEffect, useState } from "react";
import Image from "next/image";

import myImage from "../../../assets/eu.png";

import { Box, Content, Title, Subtitle, HeroAnimation } from "./Hero.styles";
import { Link } from "../../../components/atoms/Actions/Actions";

export const Hero = () => {
  const [textAnimation, setTextAnimation] = useState("");
  const phrase = "web developer";

  useEffect(() => {
    if (textAnimation === phrase) {
      setTimeout(() => reverseTypingAnimation(), 1000);
    }

    if (textAnimation.length === 0) {
      setTimeout(() => typingAnimation(), 1000);
    }
  }, [textAnimation]);

  const typingAnimation = () => {
    phrase.split("").forEach((leter, i) => {
      setTimeout(() => {
        setTextAnimation((oldText) => oldText + leter);
      }, 100 * i);
    });
  };

  const reverseTypingAnimation = () => {
    phrase.split("").forEach((leter, i) => {
      setTimeout(() => {
        setTextAnimation((oldText) => {
          const arrTextAnimation = oldText.split("");
          arrTextAnimation.pop();
          return arrTextAnimation.join("");
        });
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
