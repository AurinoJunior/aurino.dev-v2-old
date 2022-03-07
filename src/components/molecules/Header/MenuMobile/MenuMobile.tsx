import { useState } from "react";

import { HiMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

import { secondary } from "../../../../styles/Tokens";
import { Menu, MenuContent, MenuButton } from "./MenuMobile.styles";

export const MenuMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleSwitchOpenMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <MenuButton type="button" onClick={handleSwitchOpenMenu}>
        {!showMenu ? (
          <HiMenu size={28} color={secondary} />
        ) : (
          <RiCloseLine size={28} color={secondary} />
        )}
      </MenuButton>

      {showMenu && (
        <Menu>
          <MenuContent>
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Viagens</a>
            </li>
          </MenuContent>
        </Menu>
      )}
    </>
  );
};
