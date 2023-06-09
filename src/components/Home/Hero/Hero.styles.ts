import styled from 'styled-components'

import { primary, tablet_size, white } from '../../../styles/Tokens'

export const HeroBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 8rem;

  @media (min-width: ${tablet_size}) {
    flex-direction: row-reverse;
    justify-content: space-evenly;

    height: 70vh;
  }
`

export const HeroContent = styled.div`
  flex: 0.75;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: -3rem;
  gap: 1.25rem;

  z-index: 1;

  p {
    line-height: 150%;
  }
`

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.25rem;

  /* background: linear-gradient(90deg, white, ${primary}); */
  background-color: ${white};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`

export const HeroDescription = styled.p`
  width: 100%;

  @media (min-width: ${tablet_size}) {
    max-width: 50%;
  }
`

export const HeroAnimation = styled.h2`
  color: ${primary};
`
