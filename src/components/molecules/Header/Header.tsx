import Link from "next/link";

import { Logo } from "../../atoms/Logo/Logo";
import { Container } from "../../atoms/Container/Container.styles";

import { Box, Menu } from "./Header.styles";

import { MenuMobile } from "./MenuMobile/MenuMobile";

export const Header = () => {
  return (
    <Box>
      <Container>
        <Logo />
        <Menu>
          <ul>
            <li className="active">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Viagens</a>
            </li>
          </ul>
        </Menu>
        <MenuMobile />
      </Container>
    </Box>
  );
};
