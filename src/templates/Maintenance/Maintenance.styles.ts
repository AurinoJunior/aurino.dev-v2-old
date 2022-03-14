import styled from "styled-components";
import { gray_500, tablet_size } from "../../styles/Tokens";

export const Box = styled.main`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2rem;

  margin-top: 3rem;

  @media (min-width: ${tablet_size}) {
    flex-direction: row;
    justify-content: space-evenly;
    gap: 0;

    height: 100vh;

    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 2.5rem;
  }

  p {
    color: ${gray_500};
  }

  @media (min-width: ${tablet_size}) {
    width: 40%;
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 60%;

  @media (min-width: ${tablet_size}) {
    width: auto;
  }
`;
