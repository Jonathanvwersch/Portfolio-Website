import * as React from "react"

import { Layout, Hero, Contact, About } from "../components"

import Skills from "../components/Skills/Skills"
import { Work } from "../components/Work"
import { Projects } from "../components/Projects"
import Blog from "../components/Blog/Blog"

const IndexPage = () => (
  <Layout title="Home">
    <Hero />
    <About />
    <Skills />
    <Work />
    <Projects />
    <Blog />
    <Contact />
  </Layout>
)

export default IndexPage
