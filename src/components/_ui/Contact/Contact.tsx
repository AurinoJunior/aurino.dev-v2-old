import React from 'react'
import { SocialIcons } from '../SocialIcons/SocialIcons'

import { Box, Title, Paragraph } from './Contact.styles'

export const Contact = () => {
  return (
    <Box>
      <Title>Contatos</Title>
      <Paragraph>
        Esses são meus contatos para vc que quer deixar um feedback construtivo
        ou apenas dar um oi, tamo junto galera !!
      </Paragraph>
      <SocialIcons />
    </Box>
  )
}
