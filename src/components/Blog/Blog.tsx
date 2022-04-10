import * as React from "react"
import { useContext, useRef } from "react"
import styled, { ThemeContext } from "styled-components"
// @ts-ignore
import { H2 } from "../Headers/Headers"
import { Flex } from "@rebass/grid"
import { FadeInAndTranslateSection } from "../StyledComponents"
import { useVisibleOnScreen } from "../../utils"
import { BlogPost, Button, Paragraph } from ".."
import { graphql, navigate, StaticQuery } from "gatsby"
import { BlogRollProps } from "../BlogRoll/BlogRoll"

const Blog = ({ data }: BlogRollProps) => {
  const domRef = useRef()
  const isVisible = useVisibleOnScreen(domRef, true)
  const { edges: posts } = data.allMarkdownRemark
  const theme = useContext(ThemeContext)

  return (
    <StyledSection id="Blog" ref={domRef} isVisible={isVisible} as="section">
      <H2 className="numbered-header after-single-line">Blog</H2>
      <Flex flexDirection="column">
        {!posts ? (
          <Paragraph>Coming soon...</Paragraph>
        ) : (
          <>
            <Flex
              style={{ gap: theme.spacers.size16 }}
              mb={theme.spacers.size32}
            >
              {posts?.slice(0, 2).map(({ node: post }) => (
                <BlogPost
                  key={post.id}
                  path={post.frontmatter.path}
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  excerpt={post.excerpt}
                />
              ))}
            </Flex>
            <Flex alignItems="center" width="100%" justifyContent="center">
              <Button handleClick={() => navigate("/blog")}>View all</Button>
            </Flex>
          </>
        )}
      </Flex>
    </StyledSection>
  )
}

const query = () => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => <Blog data={data} />}
  />
)

const StyledSection = styled(FadeInAndTranslateSection)``

export default query
