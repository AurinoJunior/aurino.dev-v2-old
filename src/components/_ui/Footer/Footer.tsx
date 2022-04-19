import React from 'react'
import { Paragraph, Box } from './Footer.styles'

interface IFooterProps {
  fixed?: boolean
}

export const Footer = ({ fixed = false }: IFooterProps) => {
  return (
    <Box className={fixed ? 'footer--fixed' : ''}>
      <Paragraph>Feito por Aurino Junior 🚀</Paragraph>
    </Box>
  )
}
