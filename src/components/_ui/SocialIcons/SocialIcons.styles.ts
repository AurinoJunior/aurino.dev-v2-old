import styled from "styled-components";
import { tablet_size } from "../../../styles/Tokens";

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 100%;

  a:hover {
    filter: brightness(0.5);
    transition: 0.2s;
  }

  @media (min-width: ${tablet_size}) {
    width: 25%;
  }
`;
