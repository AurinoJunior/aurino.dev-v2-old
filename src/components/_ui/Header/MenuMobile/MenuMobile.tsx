import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { HiMenu } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'

import { secondary } from '../../../../styles/Tokens'
import * as S from './MenuMobile.styles'

export const MenuMobile = () => {
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
          </S.MenuContent>
        </S.Menu>
      )}
    </>
  )
}
