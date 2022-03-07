import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

import { Logo } from "../../atoms/Logo/Logo";
import { Container } from "../../atoms/Container/Container.styles";

import { Box, Nav, NavContent } from "./Header.styles";

import { secondary } from "../../../styles/Tokens";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleSwitchOpenMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <Box>
        <Logo />

        <button type="button" onClick={handleSwitchOpenMenu}>
          {!showMenu ? (
            <HiMenu size={24} color={secondary} />
          ) : (
            <RiCloseLine className="nav__icon" size={24} color={secondary} />
          )}
        </button>

        {showMenu && (
          <Nav>
            <NavContent>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Viagens</a>
              </li>
            </NavContent>
          </Nav>
        )}
      </Box>
    </Container>
  );
};
