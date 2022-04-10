import styled, { css } from "styled-components"
import { fadeInAnimation } from "../StyledComponents"

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.spacers.size96};
  background-color: ${({ theme }) => theme.colors.backgrounds.pageBackground};
  margin-bottom: ${({ theme }) => theme.spacers.size48};
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
  @media screen and (min-width: 768px) {
    display: none;
  }

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

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  ${fadeInAnimation};
  animation-duration: 1000ms;

  .horizontal-screen {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .vertical-screen {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  svg {
    ${fadeInAnimation};
    animation-duration: 1300ms;
  }

  li:nth-child(1) {
    ${fadeInAnimation};
    animation-duration: 1500ms;
  }

  li:nth-child(2) {
    ${fadeInAnimation};
    animation-duration: 1700ms;
  }

  li:nth-child(3) {
    ${fadeInAnimation};
    animation-duration: 1900ms;
  }

  li:nth-child(4) {
    ${fadeInAnimation};
    animation-duration: 2100ms;
  }

  li:nth-child(5) {
    ${fadeInAnimation};
    animation-duration: 2300ms;
  }

  li:nth-child(6) {
    ${fadeInAnimation};
    animation-duration: 2500ms;
  }
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
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
