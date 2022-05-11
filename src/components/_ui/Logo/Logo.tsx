import NextLink from 'next/link'
import * as S from './Logo.styles'

export const Logo = () => {
  return (
    <S.Logo>
      <NextLink href="/">
        <a>
          auri<span>.dev</span>
        </a>
      </NextLink>
    </S.Logo>
  )
}
