import { useState } from 'react'
import Image from 'next/image'

import { Link } from '../../_ui'

import myImage from '../../../assets/eu.png'

import {
  HeroAnimation,
  HeroBox,
  HeroCTAs,
  HeroContent,
  HeroTitle
} from './Hero.styles'

interface IHeroProps {
  data: {
    title: string
    description: string
    phraseAnimation: string[]
    img: {
      alt: string
    }
    ctas: Array<{
      link: string
      text: string
      classname: string
    }>
  }
}

const NUMBERS_OF_PHRASES = 3

export const Hero = ({ data }: IHeroProps) => {
  const { title, description, img, ctas, phraseAnimation } = data
  const [phraseNumber, setPhraseNumber] = useState(0)

  setTimeout(() => {
    if (phraseNumber === NUMBERS_OF_PHRASES - 1) {
      setPhraseNumber(0)
      return
    }
    setPhraseNumber(phraseNumber + 1)
  }, 4000)

  const [btnReadMore, btnDownloadCV] = ctas
  return (
    <HeroBox>
      <Image className="hero-img" src={myImage} alt={img.alt} priority />
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroAnimation>{phraseAnimation[phraseNumber]}</HeroAnimation>
        <p>{description}</p>
        <HeroCTAs>
          <Link
            key={btnReadMore.link}
            href={btnReadMore.link}
            classname={btnReadMore.classname}
          >
            {btnReadMore.text}
          </Link>
          <Link
            key={btnDownloadCV.link}
            href={btnDownloadCV.link}
            classname={btnDownloadCV.classname}
            target="_blank"
          >
            {btnDownloadCV.text}
          </Link>
        </HeroCTAs>
      </HeroContent>
    </HeroBox>
  )
}
