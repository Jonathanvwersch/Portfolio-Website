import styled, { keyframes, css } from "styled-components"

const fadeInOpacity = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1;}
`

export const fadeInAnimation = css<{ duration?: string }>`
  animation-name: ${fadeInOpacity};
  animation-iteration-count: 1;
  animation-timing-function: ${({ theme }) => theme.transition};
`

const IsVisibleStyles = css`
  opacity: 1;
  transform: none;
`

export const FadeInAndTranslateSection = styled.div<{ isVisible?: boolean }>`
  opacity: 0;
  transform: translateY(20vh);
  transition: opacity 2s ${({ theme }) => theme.transition},
    transform 1.5s ${({ theme }) => theme.transition};
  will-change: opacity, visibility;

  ${({ isVisible }) => isVisible && IsVisibleStyles};
`

export const FadeInSection = styled.div<{ isVisible?: boolean }>`
  opacity: 0;
  transition: opacity 2s ${({ theme }) => theme.transition};
  will-change: opacity;

  ${({ isVisible }) => isVisible && IsVisibleStyles};
`
