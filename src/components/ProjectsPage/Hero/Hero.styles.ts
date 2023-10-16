import styled from 'styled-components'

import { gray_300, gray_500 } from '../../../styles/Tokens'

export const HeroBox = styled.section`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 0.25rem;
  text-align: center;
`

export const HeroSearchBox = styled.label`
  flex: 1;
  display: flex;
  gap: 1rem;
  align-items: center;
  border: 1px solid ${gray_500};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;

  &:hover {
    border: 1px solid ${gray_300};
  }

  &:has(input:focus) {
    border: 1px solid ${gray_300};
  }
`

export const HeroSearchInput = styled.input`
  width: 100%;
  font-size: 1.25rem;
`
