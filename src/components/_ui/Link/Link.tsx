import React from 'react'
import NextLink from 'next/link'

import * as S from './Link.styles'

interface ILinkProps {
  href: string
  children: React.ReactNode | string
  classname?: string
  target?: '_self' | '_blank'
  variation?: 'primary' | 'clean'
}

export const Link = ({
  children,
  href,
  classname = '',
  target = '_self',
  variation = 'primary'
}: ILinkProps) => {
  return (
    <S.Link className={classname} $variation={variation}>
      <NextLink href={href} target={target}>
        {children}
      </NextLink>
    </S.Link>
  )
}
