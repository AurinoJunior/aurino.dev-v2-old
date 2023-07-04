import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { HiMenu } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'

import { secondary } from '../../../../styles/Tokens'
import * as S from './MobileMenu.styles'

interface IMobileMenuProps {
  menuData: Array<{
    title: string
    href: string
  }>
}

export const MobileMenu = ({ menuData }: IMobileMenuProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  const handleSwitchOpenMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <S.MobileMenuButton type="button" onClick={handleSwitchOpenMenu}>
        {!showMenu ? (
          <HiMenu size={28} color={secondary} />
        ) : (
          <RiCloseLine size={28} color={secondary} />
        )}
      </S.MobileMenuButton>

      {showMenu && (
        <S.MobileMenu>
          <S.MobileMenuContent>
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
          </S.MobileMenuContent>
        </S.MobileMenu>
      )}
    </>
  )
}
