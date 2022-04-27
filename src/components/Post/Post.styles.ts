import styled from 'styled-components'
import { gray_500, gray_800, pink, tablet_size } from '../../styles/Tokens'

export const PostBox = styled.main`
  margin: 8rem auto 0;

  @media (min-width: ${tablet_size}) {
    width: 70%;
  }
`

export const PostTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 4rem;

  @media (min-width: ${tablet_size}) {
    font-size: 2.5rem;
    text-align: center;
  }
`

export const PostSetInnerHtml = styled.div`
  h2 {
    margin: 2rem 0;
    font-size: 1.5rem;

    @media (min-width: ${tablet_size}) {
      font-size: 2rem;
    }
  }

  h3 {
    margin-top: 1rem;
  }

  p {
    margin: 1rem 0;
    line-height: 1.75rem;
    font-family: 'Mulish', sans-serif;
    font-weight: 300;

    a {
      color: ${pink};
      text-decoration: underline;

      &:hover {
        filter: brightness(0.5);
        transition: 0.2s;
      }
    }
  }

  img {
    width: 100%;
    height: auto;
  }

  pre {
    overflow-x: auto;
    tab-size: 4;
    line-height: 1.75rem;
    background-color: ${gray_800};
    padding: 1rem;

    ::-webkit-scrollbar {
      height: 8px;
    }

    & + pre {
      margin-top: 1rem;
    }

    code {
      overflow-x: scroll;
    }
  }
`

export const PostHeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PostQuoteDate = styled.p`
  color: ${gray_500};
  font-style: italic;
`
