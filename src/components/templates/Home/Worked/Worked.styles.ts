import styled from "styled-components";

import { gray_800, primary, yellow } from "../../../../styles/Colors";

export const Box = styled.section`
  margin-top: 3rem;
  padding: 3rem 0;
  width: 100%;
  background-color: ${gray_800};
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

  .number-title--catho {
    color: ${primary};
  }

  .number-title--getninjas {
    color: ${yellow};
  }

  span {
    display: block;
  }
`;
