import styled, { css } from "styled-components"

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.spacers.size96};
  background-color: ${({ theme }) => theme.colors.backgrounds.pageBackground};
`

const HamburgerMenuActive = css`
  span {
    background: transparent;
  }
  span::before {
    transform: rotate(-225deg);
    top: 0px;
  }

  span::after {
    transform: rotate(225deg);
    top: 0px;
  }
`

export const HamburgerMenu = styled.div<{ isActive?: boolean }>`
  z-index: 2;
  cursor: pointer;
  background: transparent;
  display: flex;
  align-items: center;
  width: 24px;
  height: 28px;

  span,
  span::before,
  span::after {
    position: relative;
    z-index: 1;
    content: "";
    width: ${({ theme }) => theme.spacers.size24};
    height: 2.5px;
    background: ${({ theme }) => theme.colors.iconColor};
    border-radius: 20px;
    transition: 500ms ${({ theme }) => theme.transition};
  }

  span::before {
    top: -${({ theme }) => theme.spacers.size8};
    position: absolute;
  }

  span::after {
    top: ${({ theme }) => theme.spacers.size8};
    position: absolute;
  }

  ${({ isActive }) => isActive && HamburgerMenuActive}
`

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const NavLinks = styled.ol<{ isVertical?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  margin: 0px;
  gap: ${({ theme, isVertical }) =>
    isVertical ? theme.spacers.size20 : theme.spacers.size12};
  list-style: none;
  position: relative;
  a {
    font-size: ${({ theme, isVertical }) =>
      isVertical
        ? theme.typography.fontSizes.size14
        : theme.typography.fontSizes.size12};
  }

  li:nth-child(1) {
    transition-delay: 0ms;
  }

  li:nth-child(2) {
    transition-delay: 100ms;
  }

  li:nth-child(3) {
    transition-delay: 200ms;
  }

  li:nth-child(4) {
    transition-delay: 300ms;
  }

  li {
    font-family: ${({ theme }) => theme.typography.fontFamilyMono};
    a::before {
      color: ${({ theme }) => theme.colors.primary};
      margin-right: ${({ theme }) => theme.spacers.size8};
      text-align: right;
    }
    padding: ${({ theme }) => theme.spacers.size16};
  }
`

export const NavMenu = styled.aside<{ isActive?: boolean }>`
  position: fixed;
  top: 0;
  transition: 500ms right ${({ theme }) => theme.transition};
  bottom: 0;
  right: ${({ isActive }) => (isActive ? "0" : "-100%")};
  padding: ${({ theme }) => theme.spacers.size32};
  padding-top: ${({ theme }) => theme.spacers.size48};
  background-color: ${({ theme }) => theme.colors.backgrounds.modalBackground};
`
