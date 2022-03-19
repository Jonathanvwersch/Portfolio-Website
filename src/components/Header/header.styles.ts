import styled from "styled-components"

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px ${({ theme }) => theme.spacers.size48};
  height: ${({ theme }) => theme.spacers.size96};
`

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const NavLinks = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
  position: relative;
  font-size: ${({ theme }) => theme.typography.fontSizes.size12};

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

  button {
    margin-left: ${({ theme }) => theme.spacers.size8};
  }

  li {
    counter-increment: link 1;
    a::before {
      color: ${({ theme }) => theme.colors.outline};
      content: "0" counter(link) ".";
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
  right: 0;
  min-width: 400px;
  background-color: ${({ theme }) => theme.colors.backgrounds.modalBackground};
`
