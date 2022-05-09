import * as React from "react"
import { StyledFooter } from "./Footer.styles"
import { Flex } from "@rebass/grid"
import { GithubIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from "../../icons"
import { ThemeContext } from "styled-components"
import { useContext, useRef } from "react"
import { IconWrapper, ExternalLink, Paragraph } from ".."
import { useVisibleOnScreen } from "../../utils"

const Footer = () => {
  const theme = useContext(ThemeContext)
  const domRef = useRef()
  const isVisible = useVisibleOnScreen(domRef, true)

  return (
    <StyledFooter ref={domRef} as="footer" isVisible={isVisible}>
      <Flex style={{ gap: theme.spacers.size16 }} as="ul" p="0">
        <IconWrapper as="li">
          <ExternalLink
            href="https://www.linkedin.com/in/jonathan-van-wersch"
            ariaLabel="Click here to visit my LinkedIn"
          >
            <LinkedInIcon />
          </ExternalLink>
        </IconWrapper>
        <IconWrapper as="li">
          <ExternalLink
            href="https://github.com/Jonathanvwersch"
            ariaLabel="Click here to visit my Github"
          >
            <GithubIcon />
          </ExternalLink>
        </IconWrapper>
        {/* <IconWrapper as="li">
          <ExternalLink
            href="https://twitter.com/jonathanvwersch"
            ariaLabel="Click here to visit my Twitter"
          >
            <TwitterIcon />
          </ExternalLink>
        </IconWrapper> */}
        {/* <IconWrapper as="li">
          <ExternalLink
            href="https://www.youtube.com/channel/UCksfLzZQrOTSVkr2auvac_w"
            ariaLabel="Click here to visit my Youtube page"
          >
            <YoutubeIcon />
          </ExternalLink>
        </IconWrapper> */}
      </Flex>
      <Paragraph>
        Built by Jonathan van Wersch. Design is heavily inspired by{" "}
        <ExternalLink
          href="https://brittanychiang.com/"
          textDecoration="underline"
        >
          Brittany Chiang's porfolio
        </ExternalLink>
        .
      </Paragraph>
    </StyledFooter>
  )
}

export default Footer
