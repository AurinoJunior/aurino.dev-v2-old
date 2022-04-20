import { useRouter } from 'next/router'
import Link from 'next/link'

import { Logo } from '../Logo/Logo'
import { Container } from '../Container/Container.styles'

import { MenuMobile } from './MenuMobile/MenuMobile'

import * as S from './Header.styles'

export const Header = () => {
  const router = useRouter()

  return (
    <S.Box>
      <Container>
        <Logo />
        <S.Menu>
          <ul>
            <li className={router.asPath === '/' ? 'active' : ''}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={router.asPath === '/blog' ? 'active' : ''}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className={router.asPath === '/trips' ? 'active' : ''}>
              <Link href="/trips">
                <a>Viagens</a>
              </Link>
            </li>
          </ul>
        </S.Menu>
        <MenuMobile />
      </Container>
    </S.Box>
  )
}
