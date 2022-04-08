import styled from "styled-components";
import { desktop_size } from "../../../styles/Tokens";

export const Container = styled.div`
  max-width: 85%;
  margin: 0 auto;

  @media (min-width: ${desktop_size}) {
    max-width: 1080px;
  }
`;
