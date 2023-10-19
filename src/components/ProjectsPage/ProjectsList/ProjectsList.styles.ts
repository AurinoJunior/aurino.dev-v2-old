import styled from 'styled-components'
import { gray_500 } from '../../../styles/Tokens'

export const ProjectListBox = styled.section`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  row-gap: 3rem;
`

export const Card = styled.div`
  max-width: 320px;
  border-radius: 0.5rem;
  border: solid 1px ${gray_500};
`

export const CardImage = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
`

export const CardBody = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CardTitle = styled.h2`
  font-size: 1.25rem;
`

export const CardDescription = styled.p`
  color: ${gray_500};
  line-height: 1.5rem;
`
