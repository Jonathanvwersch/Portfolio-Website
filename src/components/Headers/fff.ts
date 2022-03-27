import { css } from "styled-components"
import { HeadingProps } from "./Header.styles"

export const commonStyles = css<HeadingProps>`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ theme, fontColor }) =>
    fontColor ? fontColor : theme.colors.fontColor};
  text-align: ${({ textAlign }) => textAlign};
  font-family: ${({ fontFamily, theme }) =>
    fontFamily ? fontFamily : theme.typography.fontFamily};
`

export const headingStyles = {
  xLargeH1: css`
    font-size: ${({ theme }) => theme.typography.fontSizes.size70};
    line-height: ${({ theme }) => theme.typography.lineHeight};
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.small}px) {
      font-size: ${({ theme }) => theme.typography.fontSizes.size60};
    }
  `,
  largeH1: css`
    font-size: ${({ theme }) => theme.typography.fontSizes.size60};
    line-height: ${({ theme }) => theme.typography.lineHeight};
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.small}px) {
      font-size: ${({ theme }) => theme.typography.fontSizes.size54};
    }
  `,
  h1: css`
    font-size: ${({ theme }) => theme.typography.fontSizes.size54};
    line-height: ${({ theme }) => theme.typography.lineHeightSmall};
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.small}px) {
      font-size: ${({ theme }) => theme.typography.fontSizes.size42};
    }
  `,
  h2: css`
    font-size: ${({ theme }) => theme.typography.fontSizes.size42};
    line-height: ${({ theme }) => theme.typography.lineHeightSmall};
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.small}px) {
      font-size: ${({ theme }) => theme.typography.fontSizes.size32};
    }
  `,
  h3: css`
    font-size: ${({ theme }) => theme.typography.fontSizes.size32};
    line-height: ${({ theme }) => theme.typography.lineHeightSmall};
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.small}px) {
      font-size: ${({ theme }) => theme.typography.fontSizes.size26};
    }
  `,
  h4: css`
    font-size: ${({ theme }) => theme.typography.fontSizes.size26};
    line-height: ${({ theme }) => theme.typography.lineHeightSmall};
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.small}px) {
      font-size: ${({ theme }) => theme.typography.fontSizes.size20};
    }
  `,
  h5: css`
    font-size: ${({ theme }) => theme.typography.fontSizes.size20};
    line-height: ${({ theme }) => theme.typography.lineHeightSmall};
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.small}px) {
      font-size: ${({ theme }) => theme.typography.fontSizes.size16};
    }
  `,
  h6: css`
    font-size: ${({ theme }) => theme.typography.fontSizes.size16};
    line-height: ${({ theme }) => theme.typography.lineHeightSmall};
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.small}px) {
      font-size: ${({ theme }) => theme.typography.fontSizes.size12};
    }
  `,
}
