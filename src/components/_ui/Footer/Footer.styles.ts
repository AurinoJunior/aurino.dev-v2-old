import styled from 'styled-components'
import { gray_800, gray_900 } from '../../../styles/Tokens'

export const Box = styled.footer`
  background-color: ${gray_900};
  padding: 1rem 0;
  margin-top: 3rem;

  border-top: solid 1px ${gray_800};

  &.footer--fixed {
    position: fixed;
    width: 100%;
    bottom: 0;
    margin: 0;
  }
`

export const Paragraph = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
`
