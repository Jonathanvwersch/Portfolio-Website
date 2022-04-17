import * as React from "react"
import { useContext, useRef } from "react"
import styled, { ThemeContext } from "styled-components"
import { Button, ExternalLink, Paragraph } from ".."
import { useVisibleOnScreen } from "../../utils"
import { H2, H3 } from "../Headers/Headers"
import { FadeInAndTranslateSection } from "../StyledComponents"

const About = () => {
  const theme = useContext(ThemeContext)
  const domRef = useRef()
  const isVisible = useVisibleOnScreen(domRef, true)

  return (
    <StyledSection isVisible={isVisible} as="section" id="Contact" ref={domRef}>
      <StyledLines>
        <H2 className="numbered-header contact">Reach out</H2>
      </StyledLines>
      <H3 margin={`0px 0px ${theme.spacers.size20}`}>Let's talk</H3>
      <Paragraph
        margin={`0px 0px ${theme.spacers.size48}`}
        fontSize={theme.typography.fontSizes.size14}
      >
        I'm always looking to connect with like-minded people so feel free to
        reach out to me. I'm not currently looking for any new job
        opportunities, but my inbox remains open regardless!
      </Paragraph>
      <Button as="a" openInNewTab href="mailto:jonathanvwersch@gmail.com">
        Contact me
      </Button>
    </StyledSection>
  )
}

const StyledLines = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacers.size48};

  &:after {
    content: "";
    display: block;
    width: 100%;
    background: ${({ theme }) => theme.colors.faintColor};
    height: 1px;
    margin-left: ${({ theme }) => theme.spacers.size16};
  }

  &:before {
    content: "";
    display: block;
    width: 100%;
    background: ${({ theme }) => theme.colors.faintColor};
    height: 1px;
    margin-right: ${({ theme }) => theme.spacers.size16};
  }
`

const StyledSection = styled(FadeInAndTranslateSection)`
  align-items: center;
  text-align: center;
  max-width: 400px;
  margin: auto;
`

export default About
