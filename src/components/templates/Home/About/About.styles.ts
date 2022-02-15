import styled from "styled-components";
import { gray_500 } from "../../../../styles/Colors";

export const Title = styled.h2`
  margin-top: 3rem;
`;

export const SubTitle = styled.h3`
  margin: 2rem 0;
  font-style: italic;
  color: ${gray_500};
  font-weight: 400;
`;

export const Paragraph = styled.p`
  & + p {
    margin-top: 1rem;
  }
`;
