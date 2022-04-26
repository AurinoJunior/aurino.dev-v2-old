import React from 'react'
import * as S from './Footer.styles'

interface IFooterProps {
  fixed?: boolean
  data: {
    text: string
  }
}

export const Footer = ({ fixed = false, data }: IFooterProps) => {
  return (
    <S.Box className={fixed ? 'footer--fixed' : ''}>
      <S.Paragraph>{data.text}</S.Paragraph>
    </S.Box>
  )
}
