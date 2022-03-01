import styled from "styled-components";
import { tablet_size } from "../../../styles/Tokens";

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 100%;

  @media (min-width: ${tablet_size}) {
    width: 25%;
  }
`;
