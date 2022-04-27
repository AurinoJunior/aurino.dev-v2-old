import styled from 'styled-components'
import { gray_500, gray_800, tablet_size } from '../../styles/Tokens'

export const PostListBox = styled.ul`
  margin: 8rem auto 0;

  @media (min-width: ${tablet_size}) {
    width: 80%;
  }
`

export const PostListItem = styled.li`
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-bottom: solid 1px ${gray_800};
  list-style: none;

  margin-top: 2rem;
`

export const PostListTitle = styled.h2`
  font-size: 2rem;
`

type TPostListParagraph = {
  italic?: boolean
}

export const PostListParagraph = styled.p<TPostListParagraph>`
  font-size: 1rem;
  color: ${gray_500};

  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
`
