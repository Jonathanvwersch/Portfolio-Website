import * as React from "react"
import { NavLinks, NavMenu, StyledHeader, StyledNav } from "./header.styles"
import { CloseIcon, LogoIcon, MenuIcon } from "../../icons"
import { Button, IconWrapper, Link } from ".."
import { useOutsideClickListener, useResponsiveLayout } from "../../utils"
import { LAYOUT_VERTICAL } from "../../utils/hooks/useResponsiveLayout"
import { ThemeContext } from "styled-components"
import { useContext, useEffect, useRef, useState } from "react"
import { SIZES } from "../../definitions"
// @ts-ignore
import Resume from "../../pdfs/Jvw_Resume.pdf"
import { Flex } from "@rebass/grid"

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
      <li>
        <Link href="/#About">About</Link>
      </li>
      <li>
        <Link href="/#Work">Work</Link>
      </li>
      <li>
        <Link href="/#Projects">Projects</Link>
      </li>
      <li>
        <Link href="/#Contact">Contact</Link>
      </li>
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
