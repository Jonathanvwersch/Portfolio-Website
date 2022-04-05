import * as React from "react"
import { StyledFooter } from "./Footer.styles"
import { Flex } from "@rebass/grid"
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../../icons"
import { ThemeContext } from "styled-components"
import { useContext, useRef } from "react"
import { IconWrapper, Link, Paragraph } from ".."
import { useVisibleOnScreen } from "../../utils"

const Footer = () => {
  const theme = useContext(ThemeContext)
  const domRef = useRef()
  const isVisible = useVisibleOnScreen(domRef, true)

  return (
    <StyledFooter ref={domRef} as="footer" isVisible={isVisible}>
      <Flex style={{ gap: theme.spacers.size16 }} as="ul" p="0">
        <IconWrapper as="li">
          <Link
            href="https://www.linkedin.com/in/jonathan-van-wersch"
            target="_blank"
            openInNewTab
          >
            <LinkedInIcon />
          </Link>
        </IconWrapper>
        <IconWrapper as="li">
          <Link href="https://github.com/Jonathanvwersch" openInNewTab>
            <GithubIcon />
          </Link>
        </IconWrapper>
        <IconWrapper as="li">
          <Link
            href="https://www.linkedin.com/in/jonathan-van-wersch"
            openInNewTab
          >
            <TwitterIcon />
          </Link>
        </IconWrapper>
      </Flex>
      <Paragraph>
        Built by Jonathan van Wersch. Design is heavily inspired by{" "}
        <Link
          href="https://brittanychiang.com/"
          openInNewTab
          textDecoration="underline"
        >
          Brittany Chiang's porfolio
        </Link>
        .
      </Paragraph>
    </StyledFooter>
  )
}

export default Footer
