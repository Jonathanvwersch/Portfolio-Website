import { Box } from "@rebass/grid"
import { navigate } from "gatsby"
import * as React from "react"
import { useContext, useRef } from "react"
import styled, { ThemeContext } from "styled-components"
import { H2, Paragraph } from ".."
import { SIZES } from "../../definitions"
import { useVisibleOnScreen } from "../../utils"
import { FadeInAndTranslateSection } from "../StyledComponents"

type Props = {
  path: string
  title: string
  date: string
  excerpt: string
  img: string
  isOnFrontPage?: boolean
}

const BlogPostCard = ({
  path,
  title,
  date,
  excerpt,
  img,
  isOnFrontPage,
}: Props) => {
  const theme = useContext(ThemeContext)
  const domRef = useRef()
  const isVisible = useVisibleOnScreen(domRef, true)

  const handleNavigation = () => navigate(`/blog/${path}`)

  return (
    <BlogWrapper
      isVisible={isVisible}
      ref={domRef}
      style={{ flexGrow: "1", flexBasis: "0" }}
      role="button"
      onClick={handleNavigation}
      onKeyDown={e => {
        if (e.key === "Enter") {
          handleNavigation()
        }
      }}
      tabIndex={0}
    >
      <Post
        aria-label={`Click to navigate to full blog post on the topic of ${title}`}
      >
        <Thumbnail src={img} alt={title} isOnFrontPage={isOnFrontPage} />
        <Box p={theme.spacers.size20}>
          <header>
            <Box mb={theme.spacers.size8}>
              <H2 styledAs="h4">{title}</H2>
            </Box>
            <Paragraph margin={`0px 0px ${theme.spacers.size16} 0px`}>
              {date}
            </Paragraph>
          </header>
          <Paragraph
            fontSize={theme.typography.fontSizes.size14}
            fontFamily={theme.typography.fontFamilyMono}
          >
            {excerpt}
          </Paragraph>
        </Box>
      </Post>
    </BlogWrapper>
  )
}

const BlogWrapper = styled(FadeInAndTranslateSection)`
  &:hover,
  &:focus-visible {
    transform: scale(1.02);
  }
`

const Thumbnail = styled.img<{ isOnFrontPage?: boolean }>`
  max-width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: center center;
`

const Post = styled.article`
  min-width: 300px;
  min-height: 150px;
  height: 100%;
  box-shadow: ${({ theme }) => theme.colors.backgrounds.lightbox};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.sizes.borderRadius[SIZES.LARGE]};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.backgrounds.lightbox};
  border: solid 1px ${({ theme }) => theme.colors.primary};
`

export default BlogPostCard
