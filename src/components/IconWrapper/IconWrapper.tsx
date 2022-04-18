import React from "react"
import styled from "styled-components"

type IconWrapperProps = {
  handleClick?: () => void
  styles?: React.CSSProperties
  ariaLabel?: string
  as?: any
  tabIndex?: number
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  handleClick,
  styles,
  as,
  ariaLabel,
  tabIndex,
}) => {
  return (
    <StyledIconWrapper
      as={as}
      style={styles}
      onClick={handleClick}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    >
      {children}
    </StyledIconWrapper>
  )
}

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  background: transparent;
  border: none;
  &:focus,
  &:hover {
    svg {
      transform: scale(1.2);
    }
  }
`

export default IconWrapper
