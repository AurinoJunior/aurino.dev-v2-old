import { Logo } from "../../atoms/Logo/Logo";
import { Container } from "../../atoms/Container/Container.styles";

import { Box } from "./Header.styles";
import { NavHeader } from "./NavHeader/NavHeader";

export const Header = () => {
  return (
    <Box>
      <Container>
        <Logo />
        <NavHeader />
      </Container>
    </Box>
  );
};
