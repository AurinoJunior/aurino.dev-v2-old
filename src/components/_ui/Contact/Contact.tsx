import React from 'react'
import { SocialIcons } from '../SocialIcons/SocialIcons'

import * as S from './Contact.styles'

export const Contact = () => {
  return (
    <S.Box>
      <S.Title>Contatos</S.Title>
      <S.Paragraph>
        Esses são meus contatos para vc que quer deixar um feedback construtivo
        ou apenas dar um oi, tamo junto galera !!
      </S.Paragraph>
      <SocialIcons />
    </S.Box>
  )
}
