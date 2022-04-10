import * as React from "react"
import { Footer } from ".."
import { Header } from "../Header"
import styled, { css, ThemeProvider } from "styled-components"

import { Flex } from "@rebass/grid"
import { GlobalStyle, theme } from "../../styles"
import { ReactNode } from "react"
import Seo from "../seo"
import { fadeInAnimation } from "../StyledComponents"

type Props = {
  children: ReactNode
  title: string
  hideLinks?: boolean
}

const Layout = ({ children, title, hideLinks }: Props) => {
  return (
    <>
      <Seo title={title} />
      <ThemeProvider theme={theme(true)}>
        <GlobalStyle />
        <Flex flexDirection="column" style={{ minHeight: "100vh" }}>
          <Header hideLinks={hideLinks} />
          <Main>{children}</Main>
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

  *:nth-child(1) {
    ${fadeInAnimation};
    animation-duration: 1000ms;
  }

  *:nth-child(2) {
    ${fadeInAnimation};
    animation-duration: 1600ms;
  }

  *:nth-child(3) {
    ${fadeInAnimation};
    animation-duration: 2100ms;
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

export default Layout
