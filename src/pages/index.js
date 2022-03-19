import * as React from "react"

import { Layout, Hero } from "../components"
import Seo from "../components/seo"
import { ThemeProvider } from "styled-components"
import { theme, GlobalStyle } from "../styles"

const IndexPage = () => (
  <ThemeProvider theme={theme(true)}>
    <GlobalStyle />
    <Layout>
      <Seo title="Home" />
      <Hero />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
