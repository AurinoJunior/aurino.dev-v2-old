import { useState } from "react";

import { HiMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

import { secondary } from "../../../../styles/Tokens";
import { Nav, NavContent, NavButton } from "./NavHeader.styles";

export const NavHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleSwitchOpenMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <NavButton type="button" onClick={handleSwitchOpenMenu}>
        {!showMenu ? (
          <HiMenu size={28} color={secondary} />
        ) : (
          <RiCloseLine size={28} color={secondary} />
        )}
      </NavButton>

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
    </>
  );
};
