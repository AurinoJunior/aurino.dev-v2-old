import styled from "styled-components";

import {
  gray_800,
  primary,
  tablet_size,
  yellow,
} from "../../../../styles/Tokens";

export const Box = styled.section`
  margin-top: 3rem;
  padding: 3rem 0;
  width: 100%;
  background-color: ${gray_800};
`;

export const Content = styled.div`
  @media (min-width: ${tablet_size}) {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
  }
`;

export const Title = styled.h2`
  font-family: Sen, sans-serif;
  font-weight: 400;
  font-size: 2rem;

  &.number-title {
    margin: 1.5rem 0;
    font-size: 4rem;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;

  .number-subtitle--catho {
    color: ${primary};
  }

  .number-subtitle--getninjas {
    color: ${yellow};
  }

  span {
    display: block;
  }
`;
