import React from 'react'
import * as S from './Footer.styles'

interface IFooterProps {
  fixed?: boolean
}

export const Footer = ({ fixed = false }: IFooterProps) => {
  return (
    <S.Box className={fixed ? 'footer--fixed' : ''}>
      <S.Paragraph>Feito por Aurino Junior 🚀</S.Paragraph>
    </S.Box>
  )
}
