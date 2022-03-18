import { useRouter } from "next/router";
import Link from "next/link";

import { Logo } from "../../atoms/Logo/Logo";
import { Container } from "../../atoms/Container/Container.styles";

import { MenuMobile } from "./MenuMobile/MenuMobile";

import { Box, Menu } from "./Header.styles";

export const Header = () => {
  const router = useRouter();

  return (
    <Box>
      <Container>
        <Logo />
        <Menu>
          <ul>
            <li className={router.asPath === "/" ? "active" : ""}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={router.asPath === "/blog" ? "active" : ""}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className={router.asPath === "/trips" ? "active" : ""}>
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
