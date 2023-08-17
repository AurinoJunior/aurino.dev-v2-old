import NextLink from 'next/link'
import * as S from './Logo.styles'

export const Logo = () => {
  return (
    <S.Logo>
      <NextLink href="/">
        aurino<span>.dev</span>
      </NextLink>
    </S.Logo>
  )
}
