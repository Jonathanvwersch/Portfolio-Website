import * as React from "react"
import {
  HamburgerMenu,
  NavLinks,
  NavMenu,
  HeaderWrapper,
  NavWrapper,
} from "./Header.styles"
import { LogoIcon } from "../../icons"
import { IconWrapper, Link } from ".."
import { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { useResponsiveLayout } from "../../utils"
import { LAYOUT_VERTICAL } from "../../utils/hooks/useResponsiveLayout"

const navDetails = [
  { href: "About", title: "About" },
  { href: "Skills", title: "Skills" },
  { href: "Work", title: "Work and Education" },
  { href: "Projects", title: "Projects" },
  { href: "Contact", title: "Contact" },
]

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const layout = useResponsiveLayout()
  const isVertical = layout === LAYOUT_VERTICAL

  useEffect(() => {
    !isVertical && setShowMenu(false)
  }, [setShowMenu, isVertical])

  const navLinks = (
    <NavLinks>
      {navDetails.map(({ href, title }) => (
        <li key={title}>
          <Link href={`/#${href}`}>{title}</Link>
        </li>
      ))}
    </NavLinks>
  )

  return (
    <HeaderWrapper>
      <NavWrapper>
        <IconWrapper handleClick={() => navigate("/")}>
          <LogoIcon />
        </IconWrapper>

        {/* Vertical Screen */}
        <HamburgerMenu
          className="vertical-screen"
          onClick={() => setShowMenu(prevState => !prevState)}
          isActive={showMenu}
        >
          <span />
        </HamburgerMenu>
        <NavMenu isActive={showMenu} className="vertical-screen">
          <nav>{navLinks}</nav>
        </NavMenu>

        {/* Horizontal Screen */}
        <nav className="horizontal-screen">{navLinks}</nav>
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header
