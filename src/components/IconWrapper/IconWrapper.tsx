import React from "react"
import styled from "styled-components"

interface IconWrapperProps {
  handleClick?: () => void
  styles?: React.CSSProperties
  as?: any
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  handleClick,
  styles,
  as,
}) => {
  return (
    <StyledIconWrapper as={as} style={styles} onClick={handleClick}>
      {children}
    </StyledIconWrapper>
  )
}

const StyledIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  background: transparent;
  border: none;
`

export default IconWrapper
