import React from 'react'
import { SocialIcons } from '../SocialIcons/SocialIcons'

import * as S from './Contact.styles'

interface IContactProps {
  data: {
    title: string
    Description: string
  }
}

export const Contact = ({ data }: IContactProps) => {
  return (
    <S.Box>
      <S.Title>{data.title}</S.Title>
      <S.Paragraph>{data.Description}</S.Paragraph>
      <SocialIcons />
    </S.Box>
  )
}
