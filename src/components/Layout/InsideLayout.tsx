import * as React from "react"
import { Footer } from ".."
import { Header } from "../Header"
import styled, { ThemeProvider } from "styled-components"

import { Flex } from "@rebass/grid"
import { GlobalStyle, theme } from "../../styles"
import { ReactNode } from "react"
import { fadeInAnimation } from "../StyledComponents"
import { useDarkThemeContext } from "../../contexts/DarkThemeContext"

type Props = {
  children: ReactNode
  hideLinks?: boolean
  dataAnimation?: string
}

const InsideLayout = ({ children, hideLinks, dataAnimation }: Props) => {
  const { isDarkMode } = useDarkThemeContext()

  return (
    <>
      <ThemeProvider theme={theme(isDarkMode)}>
        <GlobalStyle />
        <Flex flexDirection="column" style={{ minHeight: "100vh" }}>
          <Header hideLinks={hideLinks} />
          <Main data-animation={dataAnimation}>{children}</Main>
          <Footer />
        </Flex>
      </ThemeProvider>
    </>
  )
}

const Main = styled.main`
  margin: 0px auto;
  width: 100%;
  max-width: 800px;
  min-height: 100vh;
  counter-reset: section;

  &[data-animation="true"]:nth-child(1) {
    ${fadeInAnimation};
    animation-duration: 1000ms;
  }

  &[data-animation="true"]:nth-child(2) {
    ${fadeInAnimation};
    animation-duration: 1600ms;
  }

  &[data-animation="true"]:nth-child(3) {
    ${fadeInAnimation};
    animation-duration: 2200ms;
  }

  section {
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacers.size80} 0px;
    margin-bottom: ${({ theme }) => theme.spacers.size64};
  }

  .numbered-header {
    counter-increment: link 1;
    display: flex;
    align-items: center;
    white-space: nowrap;

    font-family: ${({ theme }) => theme.typography.fontFamilyMono};
    margin-bottom: ${({ theme }) => theme.spacers.size32};
    font-size: ${({ theme }) => theme.typography.fontSizes.size18};

    &.contact {
      margin-bottom: 0px;
      justify-content: center;
      margin: auto;
    }

    &.after-single-line {
      &:after {
        content: "";
        display: block;
        width: 280px;
        background: ${({ theme }) => theme.colors.faintColor};
        filter: brightness(100%);
        height: 1px;
        margin-left: ${({ theme }) => theme.spacers.size16};
      }
    }

    &:before {
      font-size: ${({ theme }) => theme.typography.fontSizes.size14};
      color: ${({ theme }) => theme.colors.primary};
      counter-increment: section 1;
      content: "0" counter(section) ".";
      margin-right: ${({ theme }) => theme.spacers.size8};
      text-align: right;
    }
  }

  section:nth-child(1) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0px;
  }
`

export default InsideLayout
