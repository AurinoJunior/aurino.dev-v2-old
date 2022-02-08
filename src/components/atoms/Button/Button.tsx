import React from "react";

import { ButtonStyled } from "./Button.styles";

interface IButtonProps {
  children: React.ReactNode | string;
}

export const Button = ({ children }: IButtonProps) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};
