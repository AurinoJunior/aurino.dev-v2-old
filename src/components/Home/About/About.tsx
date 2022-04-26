import React from 'react'

import { Skillset } from './Skillset/Skillset'

import { AboutQuote, AboutBox, AboutParagraph } from './About.styles'

export const About = () => {
  return (
    <AboutBox id="about">
      <div>
        <h2>teste</h2>
        <AboutQuote>
          Não importa quanto tempo você tem, mas como você o usa. - Ekko
        </AboutQuote>
        <AboutParagraph>
          Atualmente sou desenvolvedor web front-end no GetNinjas, me formei em
          ciência da computação em 2019 e desde então tenho desbravado esse
          mundo da programação web, metodologias ágeis e cultura devops.
        </AboutParagraph>
        <AboutParagraph>
          Possuo experiência em teste AB, criação de design system, melhoria de
          métricas em web core vitals e criação de testes automatizados.
        </AboutParagraph>
        <AboutParagraph>
          Bom, espero conseguir compartilhar um pouco dos meus estudos com vocês
          e aprender bastante durantes esse processo, bora aprender juntos 🚀
        </AboutParagraph>
      </div>
      <Skillset />
    </AboutBox>
  )
}
