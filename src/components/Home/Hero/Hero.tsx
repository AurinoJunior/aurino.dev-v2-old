import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

import { Link } from '../../_ui'

import myImage from '../../../assets/eu.png'

import {
  HeroBox,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroAnimation
} from './Hero.styles'

interface IHeroProps {
  data: {
    title: string
    description: string
    phraseAnimation: string
    img: {
      alt: string
    }
    content: string
    cta: {
      link: string
      text: string
    }
  }
}

export const Hero = ({ data }: IHeroProps) => {
  const { title, description, phraseAnimation, img, cta, content } = data
  const [textAnimation, setTextAnimation] = useState('')

  const typingAnimation = useCallback(() => {
    phraseAnimation.split('').forEach((leter, i) => {
      setTimeout(() => {
        setTextAnimation((oldText) => oldText + leter)
      }, 100 * i)
    })
  }, [phraseAnimation])

  const reverseTypingAnimation = useCallback(() => {
    phraseAnimation.split('').forEach((_, i) => {
      setTimeout(() => {
        setTextAnimation((oldText) => {
          const arrTextAnimation = oldText.split('')
          arrTextAnimation.pop()
          return arrTextAnimation.join('')
        })
      }, 100 * i)
    })
  }, [phraseAnimation])

  useEffect(() => {
    if (textAnimation === phraseAnimation) {
      setTimeout(() => reverseTypingAnimation(), 1000)
    }

    if (textAnimation.length === 0) {
      setTimeout(() => typingAnimation(), 1000)
    }
  }, [phraseAnimation, reverseTypingAnimation, textAnimation, typingAnimation])

  return (
    <HeroBox>
      <Image src={myImage} alt={img.alt} layout="intrinsic" />
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroDescription>
          {description}
          <HeroAnimation>{textAnimation}</HeroAnimation>
        </HeroDescription>
        <p>{content}</p>
        <Link href={cta.link}>{cta.text}</Link>
      </HeroContent>
    </HeroBox>
  )
}
