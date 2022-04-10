import { Flex } from "@rebass/grid"
import { navigate } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import { BlogRoll, Button, H1, Layout } from "../components"
import { fadeInAnimation } from "../components/StyledComponents"
import { BUTTON_THEME, ROTATE } from "../definitions"
import { ChevronIcon } from "../icons"

const BlogPage = () => {
  return (
    <Layout title="Blog" hideLinks>
      <BackButtonWrapper>
        <Button
          buttonStyle={BUTTON_THEME.CLEAR}
          handleClick={() => navigate("/")}
        >
          <Flex style={{ gap: "4px" }}>
            <ChevronIcon rotate={ROTATE.ONEEIGHTY} />
            <span>Go back home</span>
          </Flex>
        </Button>
      </BackButtonWrapper>

      <AnimatedH1 styledAs="h2">Blog</AnimatedH1>
      <section style={{ paddingTop: "48px" }}>
        <BlogRoll />
      </section>
    </Layout>
  )
}

const BackButtonWrapper = styled.div`
  position: sticky;
  z-index: 1;
  top: ${({ theme }) => theme.spacers.size32};
  ${fadeInAnimation};
  animation-duration: 2700ms;
`

const AnimatedH1 = styled(H1)`
  ${fadeInAnimation};
  animation-duration: 2900ms;
  margin-top: ${({ theme }) => theme.spacers.size8};
`

export default BlogPage
