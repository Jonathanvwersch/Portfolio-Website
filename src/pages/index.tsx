import * as React from "react"

import { Layout, Hero, Contact, About } from "../components"
import Seo from "../components/seo"
import { ThemeProvider } from "styled-components"
import { theme, GlobalStyle } from "../styles"
import Skills from "../components/Skills/Skills"
import { Work } from "../components/Work"
import { Projects } from "../components/Projects"

const IndexPage = () => (
  <ThemeProvider theme={theme(true)}>
    <GlobalStyle />
    <Layout>
      <Seo title="Home" />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
