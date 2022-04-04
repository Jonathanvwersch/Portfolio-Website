import * as React from "react"
import {
  HamburgerMenu,
  NavLinks,
  NavMenu,
  StyledHeader,
  StyledNav,
} from "./Header.styles"
import { LogoIcon } from "../../icons"
import { IconWrapper, Link } from ".."
import { useResponsiveLayout } from "../../utils"
import { LAYOUT_VERTICAL } from "../../utils/hooks/useResponsiveLayout"
import { useEffect, useState } from "react"
import { navigate } from "gatsby"

const navDetails = [
  { href: "About", title: "About" },
  { href: "Skills", title: "Skills" },
  { href: "Work", title: "Work and Education" },
  { href: "Projects", title: "Projects" },
  { href: "Contact", title: "Contact" },
]

const Header = () => {
  const layout = useResponsiveLayout()
  const isVertical = layout === LAYOUT_VERTICAL
  const [showMenu, setShowMenu] = useState<boolean>(false)

  useEffect(() => {
    !isVertical && setShowMenu(false)
  }, [setShowMenu, isVertical])

  const navLinks = (
    <NavLinks
      style={{ flexDirection: isVertical ? "column" : "row" }}
      isVertical={isVertical}
    >
      {navDetails.map(({ href, title }) => (
        <li key={title}>
          <Link href={`/#${href}`}>{title}</Link>
        </li>
      ))}
    </NavLinks>
  )

  return (
    <StyledHeader>
      <StyledNav>
        <IconWrapper handleClick={() => navigate("/")}>
          <LogoIcon />
        </IconWrapper>
        {isVertical ? (
          <>
            <HamburgerMenu
              onClick={() => setShowMenu(prevState => !prevState)}
              isActive={showMenu}
            >
              <span />
            </HamburgerMenu>
            <NavMenu isActive={showMenu}>
              <nav>{navLinks}</nav>
            </NavMenu>
          </>
        ) : (
          navLinks
        )}
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
