import styled from "styled-components";

export const LogoStyled = styled.h1`
  font-size: 1.75rem;

  span {
    color: ${({ theme }) => theme.primary};
  }
`;
