import React, { ReactNode } from "react"
import { BUTTON_THEME, SIZES } from "../../definitions"
import { StyledButton } from "./Button.styles"

type ButtonProps = {
  children: ReactNode
  type?: "submit" | "button"
  className?: string
  fullWidth?: boolean
  isLoading?: boolean
  isDisabled?: boolean
  buttonStyle?: BUTTON_THEME
  handleClick?: (args?: any) => any
  size?: SIZES
  width?: SIZES | string
  fontSize?: string
  borderRadius?: string
  ariaLabel?: string
  id?: string
  as?: any
  fontWeight?: string
  buttonRef?: React.RefObject<HTMLButtonElement>
  href?: string
  openInNewTab?: boolean
}

const Button: React.FC<ButtonProps> = ({
  type,
  isLoading = false,
  handleClick,
  children,
  isDisabled = false,
  buttonStyle = BUTTON_THEME.PRIMARY,
  fullWidth = false,
  size = SIZES.SMALL,
  width,
  className,
  openInNewTab,
  fontSize,
  borderRadius,
  ariaLabel,
  id,
  fontWeight,
  buttonRef,
  ...props
}) => {
  const buttonClassName = className ? className : fullWidth ? "fullWidth" : ""

  return (
    <StyledButton
      id={id}
      type={type}
      disabled={isDisabled || isLoading}
      isLoading={isLoading}
      onClick={handleClick}
      size={size}
      className={buttonClassName}
      width={width}
      borderRadius={borderRadius}
      aria-label={ariaLabel}
      ref={buttonRef}
      {...(openInNewTab && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      fontSize={fontSize}
      buttonStyle={buttonStyle}
      fontWeight={fontWeight}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
