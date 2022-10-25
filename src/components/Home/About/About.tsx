import React from 'react'

import { Skillset } from './Skillset/Skillset'
import { lineBreakText } from '../../../utils/lineBreakText'
import { AboutQuote, AboutBox, AboutParagraph } from './About.styles'

interface IAboutProps {
  data: {
    title: string
    quote: string
    paragraphs: string[]
    skillset: {
      title: string
      contents: Array<{
        title: string
        text: string
      }>
    }
  }
}

export const About = ({ data }: IAboutProps) => {
  const { title, paragraphs, quote, skillset } = data

  return (
    <AboutBox id="about">
      <div>
        <h2>{lineBreakText(title)}</h2>
        <AboutQuote>{quote}</AboutQuote>
        {paragraphs.map((paragraph, index) => (
          <AboutParagraph key={index}>{paragraph}</AboutParagraph>
        ))}
      </div>
      <Skillset data={skillset} />
    </AboutBox>
  )
}
