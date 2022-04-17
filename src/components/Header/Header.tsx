import * as React from "react"
import {
  HamburgerMenu,
  NavMenu,
  HeaderWrapper,
  NavWrapper,
  ToggleAndNavContainer,
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

  const DarkModeToggleComponent = (
    <Switch
      handleToggle={toggleDarkMode}
      isChecked={isDarkMode}
      ariaLabel={`Click to toggle ${isDarkMode ? "light" : "dark"} mode`}
    />
  )

  const navLinks = (
    <>
      {navDetails.map(({ href, title }) => (
        <ExternalLink key={title} href={`/#${href}`}>
          {title}
        </ExternalLink>
      ))}
    </>
  )

  return (
    <HeaderWrapper>
      <NavWrapper>
        <IconWrapper
          as="button"
          handleClick={() => navigate("/")}
          ariaLabel="Logo icon: Click to navigate to top of home page"
        >
          <LogoIcon />
        </IconWrapper>
        {!hideLinks ? (
          <>
            {/* Vertical Screen */}
            <HamburgerMenu
              aria-expanded={!showMenu ? "false" : "true"}
              aria-controls="SideMenu"
              aria-haspopup={!showMenu ? "menu" : undefined}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  setShowMenu(prevState => !prevState)
                }
              }}
              className="vertical-screen"
              onClick={() => setShowMenu(prevState => !prevState)}
              isActive={showMenu}
              aria-label={!showMenu ? "Open menu" : "Close menu"}
            >
              <span />
            </HamburgerMenu>
            {showMenu && (
              <NavMenu
                isActive={showMenu}
                className="vertical-screen"
                id="SideMenu"
              >
                <nav>{navLinks}</nav>
                {DarkModeToggleComponent}
              </NavMenu>
            )}

            {/* Horizontal Screen */}
            <ToggleAndNavContainer className="horizontal-screen">
              <nav>{navLinks}</nav>
              {DarkModeToggleComponent}
            </ToggleAndNavContainer>
          </>
        ) : (
          DarkModeToggleComponent
        )}
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header
