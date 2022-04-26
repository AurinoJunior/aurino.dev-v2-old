import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { HiMenu } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'

import { secondary } from '../../../../styles/Tokens'
import * as S from './MenuMobile.styles'

interface IMenuMobileProps {
  menuData: {
    title: string
    href: string
  }[]
}

export const MenuMobile = ({ menuData }: IMenuMobileProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  const handleSwitchOpenMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <S.MenuButton type="button" onClick={handleSwitchOpenMenu}>
        {!showMenu ? (
          <HiMenu size={28} color={secondary} />
        ) : (
          <RiCloseLine size={28} color={secondary} />
        )}
      </S.MenuButton>

      {showMenu && (
        <S.Menu>
          <S.MenuContent>
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
          </S.MenuContent>
        </S.Menu>
      )}
    </>
  )
}
