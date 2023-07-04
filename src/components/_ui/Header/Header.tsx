import { Logo } from '../Logo/Logo'
import { Container } from '../Container/Container.styles'

import { MobileMenu } from './MobileMenu/MobileMenu'
import { DesktopMenu } from './DesktopMenu/DesktopMenu'

import * as S from './Header.styles'

interface IHeaderProps {
  menuData: Array<{
    title: string
    href: string
  }>
}

export const Header = ({ menuData }: IHeaderProps) => {
  return (
    <S.Box>
      <Container>
        <Logo />
        <DesktopMenu menuData={menuData} />
        <MobileMenu menuData={menuData} />
      </Container>
    </S.Box>
  )
}
