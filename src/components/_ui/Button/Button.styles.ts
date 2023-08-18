import styled from 'styled-components'

import { gray_800, primary, secondary, white } from '../../../styles/Tokens'

export const Button = styled.button`
  display: block;
  background-color: ${primary};

  border-radius: 0.5rem;

  padding: 0.75rem 1rem;
  width: fit-content;

  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  color: ${gray_800};

  &.secondary-btn {
    background-color: ${secondary};
  }

  &.white-btn {
    background-color: ${white};
  }
`
