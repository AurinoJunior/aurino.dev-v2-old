import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { HiMenu } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'

import { secondary } from '../../../../styles/Tokens'
import { Menu, MenuContent, MenuButton } from './MenuMobile.styles'

export const MenuMobile = () => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  const handleSwitchOpenMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <MenuButton type="button" onClick={handleSwitchOpenMenu}>
        {!showMenu ? (
          <HiMenu size={28} color={secondary} />
        ) : (
          <RiCloseLine size={28} color={secondary} />
        )}
      </MenuButton>

      {showMenu && (
        <Menu>
          <MenuContent>
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
          </MenuContent>
        </Menu>
      )}
    </>
  )
}
