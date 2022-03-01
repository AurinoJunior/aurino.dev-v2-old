import styled from "styled-components";
import { gray_500, tablet_size } from "../../../styles/Tokens";

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

export const Box = styled.div`
  padding-top: 3rem;

  @media (min-width: ${tablet_size}) {
    display: flex;
    gap: 20%;
    margin-top: 5rem;

    & > div {
      flex: 1;
    }
  }
`;
