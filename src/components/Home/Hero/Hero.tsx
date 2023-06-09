import { useState } from 'react'
import Image from 'next/image'

import { Link } from '../../_ui'

import myImage from '../../../assets/eu.png'

import { HeroAnimation, HeroBox, HeroContent, HeroTitle } from './Hero.styles'

interface IHeroProps {
  data: {
    title: string
    description: string
    phraseAnimation: string
    img: {
      alt: string
    }
    cta: {
      link: string
      text: string
    }
  }
}

const NUMBERS_OF_PHRASES = 3

export const Hero = ({ data }: IHeroProps) => {
  const { title, description, img, cta, phraseAnimation } = data
  const [phraseNumber, setPhraseNumber] = useState(0)

  setTimeout(() => {
    if (phraseNumber === NUMBERS_OF_PHRASES - 1) {
      setPhraseNumber(0)
      return
    }
    setPhraseNumber(phraseNumber + 1)
  }, 4000)

  return (
    <HeroBox>
      <Image src={myImage} alt={img.alt} layout="intrinsic" />
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroAnimation>{phraseAnimation[phraseNumber]}</HeroAnimation>
        <p>{description}</p>
        <Link href={cta.link}>{cta.text}</Link>
      </HeroContent>
    </HeroBox>
  )
}
