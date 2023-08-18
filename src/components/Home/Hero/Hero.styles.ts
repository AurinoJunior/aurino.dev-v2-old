import styled from 'styled-components'

import { primary, tablet_size, white, gray_800 } from '../../../styles/Tokens'

export const HeroBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 8rem;

  .hero-img {
    object-fit: contain;
    width: 100%;
  }

  @media (min-width: ${tablet_size}) {
    flex-direction: row-reverse;
    justify-content: space-evenly;

    height: 70vh;

    .hero-img {
      width: auto;
    }
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
  font-weight: 900;
  letter-spacing: 0.25rem;

  /* background: linear-gradient(90deg, white, ${primary}); */
  background-color: ${white};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`

export const HeroAnimation = styled.h2`
  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  animation-name: 'typing';
  animation-duration: 2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  white-space: nowrap;
  overflow: hidden;

  background-image: linear-gradient(90deg, ${primary}, white, ${gray_800});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const HeroCTAs = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`
