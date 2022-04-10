import React from "react"
import { graphql, navigate } from "gatsby"
import { Button, Layout, Post } from "../components"
import { BUTTON_THEME, ROTATE } from "../definitions"
import { ChevronIcon } from "../icons"
import { Flex } from "@rebass/grid"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const { frontmatter } = post
  const { date, title, thumbnail } = frontmatter

  return (
    <Layout title={title} hideLinks dataAnimation="true">
      <div style={{ position: "sticky", zIndex: 1, top: "32px" }}>
        <Button
          buttonStyle={BUTTON_THEME.CLEAR}
          handleClick={() => navigate("/blog")}
        >
          <Flex style={{ gap: "4px" }}>
            <ChevronIcon rotate={ROTATE.ONEEIGHTY} />
            <span>Go back to blog</span>
          </Flex>
        </Button>
      </div>
      <Post date={date} title={title} thumbnail={thumbnail} html={post.html} />
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        thumbnail
      }
    }
  }
`
