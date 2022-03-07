import { Logo } from "../../atoms/Logo/Logo";
import { Container } from "../../atoms/Container/Container.styles";

import { Box } from "./Header.styles";
import { MenuMobile } from "./MenuMobile/MenuMobile";

export const Header = () => {
  return (
    <Box>
      <Container>
        <Logo />
        <MenuMobile />
      </Container>
    </Box>
  );
};
