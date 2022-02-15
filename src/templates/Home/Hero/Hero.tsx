import React from "react";
import Image from "next/image";

import myImage from "../../../assets/eu.png";

import { Box, Content } from "./Hero.styles";
import { Link } from "../../../components/atoms/Actions/Actions";

export const Hero = () => {
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
        <h1 className="hero__title">Aurino Junior</h1>
        <h2 className="hero__subtitle">
          Eu sou <span>|</span>
        </h2>
        <p className="hero__description">
          Atualmente sou desenvolvedor de software frontend e ...
        </p>
        <Link href="#about">Leia mais</Link>
      </Content>
    </Box>
  );
};
