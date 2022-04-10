import React, { useContext } from "react"
import { graphql, StaticQuery } from "gatsby"
import { BlogPostCard } from "../BlogPostCard"
import { Flex } from "@rebass/grid"
import { ThemeContext } from "styled-components"
import { Paragraph } from ".."

type BlogData = {
  node: {
    id: string
    frontmatter: {
      path: string
      title: string
      date: string
      thumbnail: string
    }
    excerpt: string
  }
}

export type BlogRollProps = {
  data: { allMarkdownRemark: { edges: BlogData[] } }
}

const BlogRoll = ({ data }: BlogRollProps) => {
  const { edges: posts } = data.allMarkdownRemark
  const theme = useContext(ThemeContext)

  return (
    <Flex flexWrap="wrap" style={{ gap: theme.spacers.size20 }}>
      {posts ? (
        posts?.map(({ node: post }) => (
          <BlogPostCard
            key={post.id}
            path={post.frontmatter.path}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            img={post.frontmatter.thumbnail}
          />
        ))
      ) : (
        <Paragraph
          fontColor={theme.colors.grey1}
          fontSize={theme.typography.fontSizes.size16}
        >
          There are no blog posts to show
        </Paragraph>
      )}
    </Flex>
  )
}

const query = () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              excerpt(pruneLength: 300)
              id
              frontmatter {
                path
                title
                tags
                date(formatString: "MMMM DD, YYYY")
                thumbnail
              }
            }
          }
        }
      }
    `}
    render={data => <BlogRoll data={data} />}
  />
)

export default query
