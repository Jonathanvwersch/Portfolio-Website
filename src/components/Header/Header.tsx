import * as React from "react"
import {
  HamburgerMenu,
  NavLinks,
  NavMenu,
  HeaderWrapper,
  NavWrapper,
} from "./Header.styles"
import { LogoIcon } from "../../icons"
import { IconWrapper, ExternalLink } from ".."
import { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { useResponsiveLayout } from "../../utils"
import { LAYOUT_VERTICAL } from "../../utils/hooks/useResponsiveLayout"
import { Switch } from "../Switch"
import { useDarkThemeContext } from "../../contexts/DarkThemeContext"

const navDetails = [
  { href: "About", title: "About" },
  { href: "Skills", title: "Skills" },
  { href: "Work", title: "Work and Education" },
  { href: "Projects", title: "Projects" },
  { href: "Blog", title: "Blog" },
  { href: "Contact", title: "Contact" },
]

type Props = {
  hideLinks?: boolean
}

const Header = ({ hideLinks }: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const layout = useResponsiveLayout()
  const isVertical = layout === LAYOUT_VERTICAL
  const { isDarkMode, toggleDarkMode } = useDarkThemeContext()

  useEffect(() => {
    !isVertical && setShowMenu(false)
  }, [setShowMenu, isVertical])

  const navLinks = (
    <NavLinks>
      {navDetails.map(({ href, title }) => (
        <li key={title}>
          <ExternalLink href={`/#${href}`}>{title}</ExternalLink>
        </li>
      ))}
      <li>
        <Switch handleToggle={toggleDarkMode} isChecked={isDarkMode} />
      </li>
    </NavLinks>
  )

  return (
    <HeaderWrapper>
      <NavWrapper>
        <IconWrapper handleClick={() => navigate("/")}>
          <LogoIcon />
        </IconWrapper>
        {!hideLinks ? (
          <>
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
          </>
        ) : null}
        {hideLinks && (
          <Switch handleToggle={toggleDarkMode} isChecked={isDarkMode} />
        )}
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header
