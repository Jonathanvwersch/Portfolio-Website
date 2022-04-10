import React, { useContext } from "react"
import { graphql } from "gatsby"
import styled, { ThemeContext } from "styled-components"
import { Box } from "@rebass/grid"
import { H1, Paragraph } from ".."
import { SIZES } from "../../definitions"

type Props = {
  date: string
  title: string
  thumbnail: string
  html: any
}

export default function Post({ date, title, thumbnail, html }: Props) {
  const theme = useContext(ThemeContext)

  return (
    <Box mt={theme.spacers.size48}>
      <Box mb={theme.spacers.size16}>
        <H1>{title}</H1>
      </Box>
      <Box mb={theme.spacers.size32}>
        <Paragraph>{new Date(date).toDateString()}</Paragraph>
      </Box>

      <Thumbnail src={thumbnail} alt={title} />
      <Box mb={theme.spacers.size80}>
        <Paragraph
          fontSize={theme.typography.fontSizes.size16}
          html={{ __html: html }}
        />
      </Box>
    </Box>
  )
}

const Thumbnail = styled.img`
  max-width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: center center;
  margin-bottom: ${({ theme }) => theme.spacers.size48};
  border-radius: ${({ theme }) => theme.sizes.borderRadius[SIZES.MEDIUM]};
`
