import { useRouter } from 'next/router'
import Link from 'next/link'

import { Logo } from '../Logo/Logo'
import { Container } from '../Container/Container.styles'

import { MenuMobile } from './MenuMobile/MenuMobile'

import * as S from './Header.styles'

interface IHeaderProps {
  menuData: {
    title: string
    href: string
  }[]
}

export const Header = ({ menuData }: IHeaderProps) => {
  const router = useRouter()

  return (
    <S.Box>
      <Container>
        <Logo />
        <S.Menu>
          <ul>
            {menuData.map((menu, index) => (
              <li
                key={index}
                className={router.asPath === menu.href ? 'active' : ''}
              >
                <Link href={menu.href}>
                  <a>{menu.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </S.Menu>
        <MenuMobile menuData={menuData} />
      </Container>
    </S.Box>
  )
}
