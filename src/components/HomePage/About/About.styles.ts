import styled from 'styled-components'
import { gray_500, tablet_size } from '../../../styles/Tokens'

export const AboutBox = styled.div`
  padding-top: 6rem;

  @media (min-width: ${tablet_size}) {
    display: flex;
    gap: 20%;

    & > div {
      flex: 1;
    }
  }
`

export const AboutQuote = styled.blockquote`
  margin: 2rem 0;
  font-style: italic;
  color: ${gray_500};
  font-weight: 400;
  line-height: 150%;
`

export const AboutParagraph = styled.p`
  line-height: 175%;

  & + p {
    margin-top: 1rem;
  }
`
