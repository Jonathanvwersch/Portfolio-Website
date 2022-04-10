import * as React from "react"
import styled from "styled-components"
import { BlogRoll, H1, Layout } from "../components"
import { fadeInAnimation } from "../components/StyledComponents"

const BlogPage = () => {
  return (
    <Layout title="Blog">
      <AnimatedH1 styledAs="h2">Blog</AnimatedH1>
      <section>
        <BlogRoll />
      </section>
    </Layout>
  )
}

const AnimatedH1 = styled(H1)`
  ${fadeInAnimation};
  animation-duration: 2700ms;
`

export default BlogPage
