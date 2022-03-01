import styled from "styled-components";
import { gray_800, primary } from "../../../styles/Tokens";

export const Box = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  background-color: ${gray_800};
  border-radius: 1rem;

  margin-top: 3rem;
  padding: 2rem;
`;

export const Title = styled.h2`
  color: ${primary};
  font-size: 2rem;
`;

export const Paragraph = styled.p`
  text-align: center;
`;
