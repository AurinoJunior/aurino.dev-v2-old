import React from "react";
import { Logo } from "../../atoms/Logo/Logo";

import { Box } from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <Box>
      <Logo />
    </Box>
  );
};
