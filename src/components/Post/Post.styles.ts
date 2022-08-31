import styled from "styled-components";
import {
  gray_300,
  gray_500,
  gray_800,
  pink,
  primary,
  tablet_size,
  yellow,
} from "../../styles/Tokens";

export const PostBox = styled.main`
  margin: 8rem auto 0;

  @media (min-width: ${tablet_size}) {
    width: 70%;
  }
`;

export const PostTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 4rem;

  @media (min-width: ${tablet_size}) {
    font-size: 2.5rem;
  }
`;

export const PostSetInnerHtml = styled.div`
  h2 {
    margin: 2rem 0;
    font-size: 2rem;
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
      color: ${pink};
      text-decoration: underline;

      &:hover {
        filter: brightness(0.5);
        transition: 0.2s;
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

  img[src$='full-image'] {
    margin: 2rem 0;
    width: 100%;
    height: auto;
  }

  img[src$='medium-image'] {
    display: block;
    margin: 2rem auto;
    width: 80%;
    height: auto;

    @media (min-width: ${tablet_size}) {
      width: 70%;
    }
  }

  img[src$='small-image'] {
    display: block;
    margin: 2rem auto;
    width: 70%;
    height: auto;

    @media (min-width: ${tablet_size}) {
      width: 35%;
    }
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
`;

export const PostHeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostQuoteDate = styled.p`
  color: ${gray_500};
  font-style: italic;
`;
