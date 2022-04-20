import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { Link, Paragraph } from '../../_ui'

import myImage from '../../../assets/eu.png'

import {
  HeroBox,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroAnimation
} from './Hero.styles'

export const Hero = () => {
  const [textAnimation, setTextAnimation] = useState('')
  const phrase = 'web developer'

  useEffect(() => {
    if (textAnimation === phrase) {
      setTimeout(() => reverseTypingAnimation(), 1000)
    }

    if (textAnimation.length === 0) {
      setTimeout(() => typingAnimation(), 1000)
    }
  }, [textAnimation])

  const typingAnimation = () => {
    phrase.split('').forEach((leter, i) => {
      setTimeout(() => {
        setTextAnimation((oldText) => oldText + leter)
      }, 100 * i)
    })
  }

  const reverseTypingAnimation = () => {
    phrase.split('').forEach((_, i) => {
      setTimeout(() => {
        setTextAnimation((oldText) => {
          const arrTextAnimation = oldText.split('')
          arrTextAnimation.pop()
          return arrTextAnimation.join('')
        })
      }, 100 * i)
    })
  }

  return (
    <HeroBox>
      <Image
        src={myImage}
        alt="Imagem de Aurino Junior em preto e branco utilizando boné e casaco"
        layout="intrinsic"
      />
      <HeroContent>
        <HeroTitle>Aurino Junior</HeroTitle>
        <HeroDescription>
          Eu sou <HeroAnimation>{textAnimation}</HeroAnimation>
        </HeroDescription>
        <Paragraph>
          Atualmente sou desenvolvedor de software frontend e ...
        </Paragraph>
        <Link href="#about">Leia mais</Link>
      </HeroContent>
    </HeroBox>
  )
}
