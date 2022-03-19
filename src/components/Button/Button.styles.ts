import styled, { css } from "styled-components"
import { BUTTON_THEME, SIZES } from "../../definitions"

interface ButtonProps {
  isLoading: boolean
  size: SIZES
  width?: SIZES | string
  borderRadius?: string
  fontSize?: string
  buttonStyle?: BUTTON_THEME
  fontWeight?: string
}

export const StyledButton = styled.button<ButtonProps>`
  transition: opacity 0.1s ease-out, border-color 0.1s ease-out,
    background-color 0.1s ease-out;
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? borderRadius : theme.sizes.borderRadius[SIZES.MEDIUM]};
  padding: ${({ theme }) => `${theme.spacers.size4} ${theme.spacers.size16}`};
  text-decoration: none;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ theme, size, fontSize }) =>
    fontSize
      ? fontSize
      : size === SIZES.SMALL
      ? theme.typography.fontSizes.size14
      : theme.typography.fontSizes.size16};
  height: ${({ theme, size }) => theme.sizes.button.height[size]};
  user-select: none;
  width: ${({ theme, width }) =>
    width === SIZES.SMALL ||
    width === SIZES.MEDIUM ||
    width === SIZES.LARGE ||
    width === SIZES.XLARGE
      ? theme.sizes.button.width[width]
      : width};
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: none;
  border: none;

  &.fullWidth {
    width: 100%;
  }

  &:focus-visible,
  &:hover {
    filter: ${({ theme }) => theme.colors.hover.filter};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    & svg path {
      fill: ${({ theme }) => theme.colors.backgrounds.pageBackground};
    }
    cursor: ${({ isLoading }: { isLoading: boolean }) =>
      isLoading ? "progress" : "not-allowed"};
    background-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.backgrounds.pageBackground};
    &:active,
    &:hover {
      filter: none;
    }
  }

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case BUTTON_THEME.SECONDARY:
        return ButtonSecondary
      case BUTTON_THEME.DANGER:
        return ButtonDanger
      default:
        return ButtonPrimary
    }
  }}
`

export const ButtonPrimary = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.outline};
  border: solid 1px ${({ theme }) => theme.colors.outline};
`

export const ButtonSecondary = css`
  background-color: ${({ theme }) => theme.colors.backgrounds.pageBackground};
  color: ${({ theme }) => theme.colors.fontColor};
  border-color: ${({ theme }) => theme.colors.grey1};
  border-width: 1px;
  border-style: solid;
`

export const ButtonDanger = css`
  background-color: ${({ theme }) => theme.colors.danger};
  color: white;
`
