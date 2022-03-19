import * as React from "react"
import { StyledFooter } from "./footer.styles"
import { Flex } from "@rebass/grid"
import { GithubIcon, LinkedInIcon } from "../../icons"
import { ThemeContext } from "styled-components"
import { useContext } from "react"
import { IconWrapper, Link, Paragraph } from ".."

const Footer = () => {
  const theme = useContext(ThemeContext)

  return (
    <StyledFooter>
      <Flex style={{ gap: theme.spacers.size16 }} as="ul" p="0">
        <IconWrapper as="li">
          <Link
            href="https://github.com/Jonathanvwersch"
            target="_blank"
            openInNewTab
          >
            <LinkedInIcon />
          </Link>
        </IconWrapper>
        <IconWrapper as="li">
          <Link
            href="https://www.linkedin.com/in/jonathan-van-wersch"
            openInNewTab
          >
            <GithubIcon />
          </Link>
        </IconWrapper>
      </Flex>
      <Paragraph>Designed and built by Jonathan van Wersch</Paragraph>
    </StyledFooter>
  )
}

export default Footer
