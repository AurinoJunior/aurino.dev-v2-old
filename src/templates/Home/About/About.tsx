import React from "react";

import { Title, SubTitle, Paragraph } from "./About.styles";

export const About = () => {
  return (
    <>
      <Title id="about">
        Salve galera! <br />
        Aurino Junior aqui.
      </Title>
      <SubTitle>
        Não importa quanto tempo você tem, mas como você o usa. - Ekko
      </SubTitle>
      <Paragraph>
        Atualmente sou desenvolvedor web front-end no GetNinjas, me formei em
        ciência da computação em 2019 e desde então tenho desbravado esse mundo
        da programação web, metodologias ágeis e cultura devops.
      </Paragraph>
      <Paragraph>
        Possuo experiência em teste AB, criação de design system, melhoria de
        métricas em web core vitals e criação de testes automatizados.
      </Paragraph>
      <Paragraph>
        Bom, espero conseguir compartilhar um pouco dos meus estudos com vocês e
        aprender bastante durantes esse processo, bora aprender juntos 🚀
      </Paragraph>
    </>
  );
};
