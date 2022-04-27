import styled from 'styled-components'

import { gray_800, primary, tablet_size, yellow } from '../../../styles/Tokens'

export const WorkedBox = styled.section`
  margin-top: 3rem;
  padding: 3rem 0;
  width: 100%;
  background-color: ${gray_800};
`

export const WorkedTitle = styled.h2`
  font-size: 2rem;

  &.number-title {
    margin: 1.5rem 0;
    font-size: 4rem;
  }
`

export const WorkedContent = styled.div`
  @media (min-width: ${tablet_size}) {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
  }
`

type WorkedSubTitleProps = {
  highlight: string
}

export const WorkedSubTitle = styled.h3<WorkedSubTitleProps>`
  margin-bottom: 1rem;
  font-size: 1.5rem;

  span {
    color: ${({ highlight }) => (highlight === 'primary' ? primary : yellow)};
    display: block;
  }
`
