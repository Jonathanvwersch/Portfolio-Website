import styled from "styled-components"

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

export const NavMenu = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  padding: ${({ theme }) => theme.spacers.size32};
  padding-top: ${({ theme }) => theme.spacers.size48};
  right: 0;
  background-color: ${({ theme }) => theme.colors.backgrounds.modalBackground};
`
