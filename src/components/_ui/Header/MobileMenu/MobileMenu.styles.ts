import styled from 'styled-components'
import { gray_800, secondary, tablet_size } from '../../../../styles/Tokens'

export const MobileMenu = styled.nav`
  background-color: ${gray_800};

  position: fixed;
  top: 0;
  right: 0;

  height: 100vh;
  width: 100vw;
  border-bottom-left-radius: 0;

  animation: openMenu 500ms ease-in;

  @media (min-width: ${tablet_size}) {
    display: none;
  }

  @keyframes openMenu {
    from {
      width: 20vw;
      height: 10vh;
      border-bottom-left-radius: 100%;
    }

    to {
      width: 300vw;
      height: 200vh;
      border-bottom-left-radius: 100%;
    }
  }
`

export const MobileMenuContent = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  list-style: none;

  font-size: 2rem;
  font-weight: 600;

  animation: delayShowText 550ms ease-in;

  .active {
    color: ${secondary};
  }

  @keyframes delayShowText {
    0% {
      opacity: 0;
    }

    95% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

export const MobileMenuButton = styled.button`
  z-index: 3;

  @media (min-width: ${tablet_size}) {
    display: none;
  }
`
