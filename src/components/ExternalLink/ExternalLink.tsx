import React, {
  HTMLAttributeAnchorTarget,
  HTMLAttributeReferrerPolicy,
} from "react"
import styled from "styled-components"

type LinkProps = {
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
  target?: HTMLAttributeAnchorTarget
  openInNewTab?: boolean
  rel?: string
  ariaLabel?: string
  ref?: React.RefObject<any>
  referrerPolicy?: HTMLAttributeReferrerPolicy
  type?: string
  ping?: string
  style?: React.CSSProperties
}

const ExternalLink: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <StyledLink
      {...props}
      aria-label={props.ariaLabel}
      className={props.className}
      {...(props.openInNewTab && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {children}
    </StyledLink>
  )
}

const StyledLink = styled.a<LinkProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ fontColor, theme }) =>
    fontColor ? fontColor : theme.colors.fontColor};
  margin: 0;
  max-width: ${({ maxWidth }) => maxWidth};
  text-align: ${({ textAlign }) => textAlign};
  user-select: ${({ userSelect }) => userSelect};
  cursor: pointer;
  text-decoration: ${({ textDecoration }) =>
    textDecoration || "none"}!important;

  &:hover,
  &:focus {
    text-decoration: ${({ textDecoration }) => textDecoration || "none"};
  }

  &.overflow {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    svg {
      transform: scale(1.2);
    }
  }
`

export default ExternalLink
