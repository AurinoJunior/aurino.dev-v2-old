import React from 'react'

import * as S from './Button.styles'

interface IButtonProps {
  children: React.ReactNode | string
  classname?: string
}

export const Button = ({ children, classname = '' }: IButtonProps) => {
  return <S.Button className={classname}>{children}</S.Button>
}
