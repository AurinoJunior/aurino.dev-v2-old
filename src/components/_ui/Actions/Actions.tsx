import React from 'react'

import * as S from './Actions.styles'

interface IActionsProps {
  children: React.ReactNode | string
  classname?: string
}

interface ILinkProps extends IActionsProps {
  href: string
}

export const Button = ({ children, classname = '' }: IActionsProps) => {
  return <S.Button className={classname}>{children}</S.Button>
}

export const Link = ({ children, href, classname = '' }: ILinkProps) => {
  return (
    <S.Link className={classname} href={href} target="_blank">
      {children}
    </S.Link>
  )
}
