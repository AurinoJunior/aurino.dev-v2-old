import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './DesktopMenu.styles'

interface IDesktopMenuProps {
  menuData: Array<{
    title: string
    href: string
  }>
}

export const DesktopMenu = ({ menuData }: IDesktopMenuProps) => {
  const router = useRouter()

  return (
    <S.DesktopMenu>
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
    </S.DesktopMenu>
  )
}
