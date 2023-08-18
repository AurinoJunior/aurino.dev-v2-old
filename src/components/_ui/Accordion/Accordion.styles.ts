import styled from 'styled-components'
import { secondary } from '../../../styles/Tokens'

interface IAccordionStylesProps {
  $activate: boolean
}

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;

  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  input {
    all: unset;
    font-size: 1.5rem;
    font-weight: 600;

    &:focus {
      outline: auto;
    }
  }

  label,
  input {
    color: ${secondary};
    cursor: pointer;
  }
`

export const AnimationDescription = styled.p<IAccordionStylesProps>`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
  }

  animation: fadeIn 300ms forwards ease-in alternate;
  opacity: ${({ $activate }) => ($activate ? 1 : 0)};
`
