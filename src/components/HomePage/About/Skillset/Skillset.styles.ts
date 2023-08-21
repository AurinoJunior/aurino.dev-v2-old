import styled from 'styled-components'
import { desktop_size } from '../../../../styles/Tokens'

export const SkillsetTitle = styled.h2`
  text-align: center;
  margin: 3rem 0;
  font-size: 2rem;

  @media (min-width: ${desktop_size}) {
    margin-top: 0;
  }
`

export const SkillsetContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 85%;
  margin: 0 auto;
`
