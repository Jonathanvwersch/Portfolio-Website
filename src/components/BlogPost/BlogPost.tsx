import { Box } from "@rebass/grid"
import * as React from "react"
import { useContext, useRef } from "react"
import styled, { ThemeContext } from "styled-components"
import { H2, Paragraph } from ".."
import { SIZES } from "../../definitions"
import { useVisibleOnScreen } from "../../utils"
import { FadeInAndTranslateSection } from "../StyledComponents"
import Img, { FluidObject } from "gatsby-image"

type Props = {
  path: string
  title: string
  date: string
  excerpt: string
  img: FluidObject | FluidObject[]
}

const BlogPost = ({ path, title, date, excerpt, img }: Props) => {
  const theme = useContext(ThemeContext)
  const domRef = useRef()
  const isVisible = useVisibleOnScreen(domRef, true)

  return (
    <PostLink as="a" ref={domRef} href={`/blog/${path}`} isVisible={isVisible}>
      <Post>
        <header>
          <Box mb={theme.spacers.size8}>
            <H2 fontColor={theme.colors.secondary} styledAs="h4">
              {title}
            </H2>
          </Box>
          <Paragraph>{date}</Paragraph>
        </header>
        <Box mt={theme.spacers.size24}>
          <Paragraph fontFamily={theme.typography.fontFamilyMono}>
            {excerpt}
          </Paragraph>
        </Box>
        <Img fluid={img} alt={title} />
      </Post>
    </PostLink>
  )
}

const PostLink = styled(FadeInAndTranslateSection)`
  flex-grow: 1;
  min-width: 300px;
  flex-basis: 0;
  min-height: 150px;
`

const Post = styled.article`
  height: 100%;
  border: solid 2px ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacers.size16};
  border-radius: ${({ theme }) => theme.sizes.borderRadius[SIZES.MEDIUM]};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgrounds.lightbox};
    transform: scale(1.05);
  }
`

export default BlogPost
