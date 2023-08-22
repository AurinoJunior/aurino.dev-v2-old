import styled from 'styled-components'
import {
  gray_300,
  gray_500,
  gray_800,
  primary,
  secondary,
  tablet_size,
  yellow
} from '../../../styles/Tokens'

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
  }
`

export const PostHeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;

    &:hover {
      filter: brightness(0.5);
    }
  }
`

export const PostQuoteDate = styled.p`
  color: ${gray_500};
  font-style: italic;
`

export const PostSetInnerHtml = styled.section`
  h2 {
    margin: 2rem 0;
    font-size: 1.75rem;
    color: ${primary};
  }

  h3 {
    margin: 2rem 0;
    color: ${primary};
    font-size: 1.5rem;
  }

  p {
    margin: 1rem 0;
    line-height: 1.75rem;
    font-family: 'Mulish', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
    color: ${gray_300};

    a {
      color: ${secondary};
      text-decoration: underline;

      &:hover {
        filter: brightness(0.5);
      }
    }
  }

  ul,
  ol {
    font-family: 'Mulish', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
    color: ${gray_300};
    padding-left: 2rem;
    margin-top: 1rem;

    li + li {
      margin-top: 1rem;
    }

    strong {
      color: ${yellow};
    }
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  pre {
    code {
      border-radius: 10px;
    }
  }
`

export const CommentHeader = styled.h2`
  margin-top: 6rem;
  margin-bottom: 2rem;
  font-size: 1.75rem;
`

export const CommentBox = styled.div`
  padding: 2rem 0;

  & + & {
    border-top: 1px ${gray_800} solid;
  }

  h3 {
    margin-bottom: 1rem;
    color: ${secondary};
  }
`

export const CommentSetInnerHtml = styled.div`
  p {
    word-wrap: break-word;
    line-height: 1.25rem;
  }

  p + p {
    margin-top: 1rem;
  }
`
