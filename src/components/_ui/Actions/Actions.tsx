import React from 'react'

import { ButtonStyled, LinkStyled } from './Actions.styles'

interface IActionsProps {
  children: React.ReactNode | string
}

interface ILinkProps extends IActionsProps {
  href: string
}

export const Button = ({ children }: IActionsProps) => {
  return <ButtonStyled>{children}</ButtonStyled>
}

export const Link = ({ children, href }: ILinkProps) => {
  return <LinkStyled href={href}>{children}</LinkStyled>
}
