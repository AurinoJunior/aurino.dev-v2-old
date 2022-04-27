import styled from 'styled-components'
import { yellow } from '../../styles/Tokens'

export const PostBox = styled.main`
  width: 70%;
  margin: 8rem auto 0;
`

export const PostTitle = styled.h1`
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 4rem;
`

export const PostSetInnerHtml = styled.div`
  h2 {
    margin: 2rem 0;
  }

  p {
    margin: 1rem 0;
    text-align: justify;
  }
`
