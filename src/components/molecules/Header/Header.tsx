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
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/trips">
                <a>Viagens</a>
              </Link>
            </li>
          </ul>
        </Menu>
        <MenuMobile />
      </Container>
    </Box>
  );
};
