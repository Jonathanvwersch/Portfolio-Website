import React from "react"
import { graphql, navigate } from "gatsby"
import { Button, Layout, Post } from "../components"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const { frontmatter } = post
  const { date, title, thumbnail } = frontmatter

  return (
    <Layout title={title}>
      <Button handleClick={() => navigate("/blog")}>Go back</Button>
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
