import * as React from "react"
import { NavLinks, NavMenu, StyledHeader, StyledNav } from "./Headers.styles"
import { CloseIcon, LogoIcon, MenuIcon } from "../../icons"
import { IconWrapper, Link } from ".."
import { useOutsideClickListener, useResponsiveLayout } from "../../utils"
import { LAYOUT_VERTICAL } from "../../utils/hooks/useResponsiveLayout"
import { ThemeContext } from "styled-components"
import { useContext, useEffect, useRef, useState } from "react"
import { SIZES } from "../../definitions"

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
  const theme = useContext(ThemeContext)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const navMenuRef = useRef()
  useOutsideClickListener(navMenuRef, () => setShowMenu(false), showMenu)

  useEffect(() => {
    !isVertical && setShowMenu(false)
  }, [setShowMenu, isVertical])

  const navLinks = (
    <NavLinks
      style={{ flexDirection: isVertical ? "column" : "row" }}
      isVertical={isVertical}
    >
      {navDetails.map(({ href, title }) => (
        <li key={title} onClick={() => setShowMenu(false)}>
          <Link href={`/#${href}`}>{title}</Link>
        </li>
      ))}
    </NavLinks>
  )

  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/">
          <LogoIcon />
        </Link>
        {isVertical ? (
          <>
            <IconWrapper
              handleClick={() => setShowMenu(prevState => !prevState)}
            >
              <MenuIcon size={theme.spacers.size40} />
            </IconWrapper>
            {showMenu && (
              <NavMenu ref={navMenuRef}>
                <nav>{navLinks}</nav>
                <IconWrapper
                  styles={{
                    position: "absolute",
                    top: theme.spacers.size16,
                    right: theme.spacers.size16,
                  }}
                  handleClick={() => setShowMenu(false)}
                >
                  <CloseIcon size={SIZES.XLARGE} />
                </IconWrapper>
              </NavMenu>
            )}
          </>
        ) : (
          navLinks
        )}
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
