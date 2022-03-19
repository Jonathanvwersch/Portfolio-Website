import * as React from "react"
import { Footer } from ".."
import { Header } from "../Header"
import { Flex } from "@rebass/grid"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" style={{ minHeight: "100vh" }}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Flex>
  )
}

const Main = styled.main`
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  section {
    padding: ${({ theme }) => theme.spacers.size48} 0px;
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
