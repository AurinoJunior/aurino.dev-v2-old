import styled from 'styled-components'
import {
  gray_500,
  secondary,
  tablet_size,
  white
} from '../../../../styles/Tokens'

export const DesktopMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    list-style: none;
  }

  li {
    color: ${gray_500};
    padding: 1rem 0;

    &:hover {
      filter: brightness(0.4);
      transition: 0.2s;
    }

    &.active {
      color: ${white};
      font-weight: 600;

      border-bottom: 2px solid ${secondary};

      &:hover {
        filter: none;
      }
    }

    a {
      padding: 1rem;
    }
  }

  @media (max-width: ${tablet_size}) {
    display: none;
  }
`
