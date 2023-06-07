import Image from 'next/image'

import { Link } from '../../_ui'

import myImage from '../../../assets/eu.png'

import { HeroBox, HeroContent, HeroTitle } from './Hero.styles'

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

export const Hero = ({ data }: IHeroProps) => {
  const { title, description, img, cta } = data

  return (
    <HeroBox>
      <Image src={myImage} alt={img.alt} layout="intrinsic" />
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <p>{description}</p>
        <Link href={cta.link}>{cta.text}</Link>
      </HeroContent>
    </HeroBox>
  )
}
