import styled from "styled-components";

export const LogoStyled = styled.h1`
  font-size: 2.25rem;

  span {
    color: ${({ theme }) => theme.primary};
  }
`;
