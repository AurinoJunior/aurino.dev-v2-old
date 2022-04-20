import React from 'react'

import * as S from './Actions.styles'

interface IActionsProps {
  children: React.ReactNode | string
}

interface ILinkProps extends IActionsProps {
  href: string
}

export const Button = ({ children }: IActionsProps) => {
  return <S.Button>{children}</S.Button>
}

export const Link = ({ children, href }: ILinkProps) => {
  return <S.Link href={href}>{children}</S.Link>
}
