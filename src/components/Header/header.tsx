import * as React from "react"
import { NavLinks, NavMenu, StyledHeader, StyledNav } from "./header.styles"
import { LogoIcon, MenuIcon } from "../../icons"
import { Button, IconWrapper, Link } from ".."
import { useResponsiveLayout } from "../../utils"
import { LAYOUT_VERTICAL } from "../../utils/hooks/useResponsiveLayout"
import { ThemeContext } from "styled-components"
import { useContext, useState } from "react"

const Header = () => {
  const layout = useResponsiveLayout()
  const theme = useContext(ThemeContext)
  const [showMenu, setShowMenu] = useState<Boolean>(false)

  return (
    <StyledHeader>
      <StyledNav>
        <a href="/">
          <LogoIcon />
        </a>
        {layout === LAYOUT_VERTICAL ? (
          <>
            <IconWrapper
              handleClick={() => setShowMenu(prevState => !prevState)}
            >
              <MenuIcon size={theme.spacers.size40} />
            </IconWrapper>
            {showMenu && <NavMenu />}
          </>
        ) : (
          <NavLinks>
            <li>
              <Link href="/#About">About</Link>
            </li>
            <li>
              <Link href="/#Experience">Experience</Link>
            </li>
            <li>
              <Link href="/#Projects">Projects</Link>
            </li>
            <li>
              <Link href="/#Contact">Contact</Link>
            </li>
            <Button>Resume</Button>
          </NavLinks>
        )}
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
