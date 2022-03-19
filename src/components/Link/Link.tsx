import React from "react"
import styled from "styled-components"

interface LinkProps {
  href: string
  fontSize?: string
  fontWeight?: string
  fontColor?: string
  margin?: string
  className?: string
  maxWidth?: string
  hover?: string
  filterActive?: boolean // set to true if you want to apply a filter based active state
  textDecoration?: string
  textAlign?: string
  userSelect?: string
  hreflang?: string
  target?: string
  rel?: string
  referrerPolicy?:
    | ""
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url"
  type?: string
  ping?: string
  style?: React.CSSProperties
}

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <StyledLink
      {...props}
      className={props.className}
      referrerPolicy={props.referrerPolicy}
    >
      {children}
    </StyledLink>
  )
}

const StyledLink = styled.a<LinkProps>`
  font-size: ${({ fontSize, theme }) =>
    fontSize ? fontSize : theme.typography.fontSizes.size12};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ fontColor, theme }) =>
    fontColor ? fontColor : theme.colors.fontColor};
  margin: 0;
  max-width: ${({ maxWidth }) => maxWidth};
  text-decoration: ${({ textDecoration }) => textDecoration || "none"};
  text-align: ${({ textAlign }) => textAlign};
  user-select: ${({ userSelect }) => userSelect};
  cursor: pointer;

  &.overflow {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.outline};
  }
`

export default Link
