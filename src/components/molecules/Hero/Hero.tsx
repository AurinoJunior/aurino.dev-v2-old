import React from "react";
import Image from "next/image";

import myImage from "../../../assets/eu.png";

import { Box, Content } from "./Hero.styles";

export const Hero: React.FC = () => {
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
        <h2>Eu sou |</h2>
        <p className="hero__description">
          Atualmente sou desenvolvedor de software frontend e ...
        </p>
        <button>Leia mais</button>
      </Content>
    </Box>
  );
};
