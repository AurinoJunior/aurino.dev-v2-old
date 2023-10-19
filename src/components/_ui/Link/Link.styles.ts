import styled from 'styled-components'

import { gray_800, primary, secondary, white } from '../../../styles/Tokens'

interface ILinkProps {
  $variation?: 'primary' | 'secondary' | 'white' | 'clean'
}

const COLORS = {
  primary,
  secondary,
  white,
  clean: ''
}

export const Link = styled.div<ILinkProps>`
  background-color: ${({ $variation }) => COLORS[$variation]};

  border-radius: 0.5rem;

  width: fit-content;

  font-weight: 600;
  text-align: center;
  color: ${({ $variation }) => ($variation === 'clean' ? white : gray_800)};

  a {
    display: block;
    padding: 0.75rem 1rem;
  }

  &:hover {
    filter: brightness(0.7);
  }

  &.no-margins {
    a {
      padding: 0;
    }
  }
`
