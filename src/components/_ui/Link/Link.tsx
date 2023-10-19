import React from 'react'
import NextLink from 'next/link'

import * as S from './Link.styles'

interface ILinkProps {
  href: string
  children: React.ReactNode | string
  className?: string
  target?: '_self' | '_blank'
  variation?: 'primary' | 'secondary' | 'white' | 'clean'
}

export const Link = ({
  children,
  href,
  className = '',
  target = '_self',
  variation = 'primary'
}: ILinkProps) => {
  return (
    <S.Link className={className} $variation={variation}>
      <NextLink href={href} target={target}>
        {children}
      </NextLink>
    </S.Link>
  )
}
