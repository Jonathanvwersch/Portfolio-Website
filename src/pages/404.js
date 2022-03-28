import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme, GlobalStyle } from "../styles"

import Seo from "../components/seo"
import { navigate } from "gatsby"
import { H1, H2, Button } from "../components"
import { Box } from "@rebass/grid"
import { SIZES } from "../definitions"

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme(true)}>
      <GlobalStyle />
      <Wrapper>
        <Seo title="404: Not found" />
        <H1 styledAs="largeH1">404</H1>
        <H2 styledAs="h5">That page does not exist</H2>
        <Box mt="32px">
          <Button size={SIZES.LARGE} handleClick={() => navigate("/")}>
            Go Home
          </Button>
        </Box>
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export default NotFoundPage
