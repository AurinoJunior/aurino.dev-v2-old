import React from "react";
import { Logo } from "../../atoms/Logo/Logo";
import { Container } from "../../atoms/Container/Container.styles";

import { Box } from "./Header.styles";

export const Header = () => {
  return (
    <Box>
      <Container>
        <Logo />
      </Container>
    </Box>
  );
};
