import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { Button, Link } from ".."
import { SIZES } from "../../definitions"
import { H1, H2, H3 } from "../Headers/Headers"
import { Paragraph } from "../Paragraph"
// @ts-ignore
import Resume from "../../pdfs/Jvw_Resume.pdf"
import { fadeInAnimation } from "../StyledComponents"

type HeroProps = {}

const Hero: React.FC<HeroProps> = () => {
  const theme = useContext(ThemeContext)

  return (
    <StyledHero>
      <H1
        margin={`0px 0px ${theme.spacers.size16}`}
        fontFamily={theme.typography.fontFamilyMono}
        styledAs="h4"
        fontColor={theme.colors.primary}
      >
        Hi, my name is
      </H1>
      <H2 margin={`0px 0px ${theme.spacers.size16}`} styledAs="h2">
        Jonathan van Wersch
      </H2>
      <H3 fontColor={theme.colors.secondary} styledAs="h1">
        I love building products for the web
      </H3>
      <Paragraph
        margin={`${theme.spacers.size24} 0px ${theme.spacers.size48}`}
        maxWidth="530px"
        fontSize={theme.typography.fontSizes.size14}
      >
        I am currently working as a software engineer at{" "}
        <Link
          href="https://www.improbable.io/"
          openInNewTab
          fontSize="inherit"
          textDecoration="underline"
        >
          Improbable
        </Link>
        . I love building products that make a positive difference to the world.
      </Paragraph>
      <Link openInNewTab href={Resume} fontColor="inherit" className="resume">
        <Button size={SIZES.MEDIUM}>Download my resume</Button>
      </Link>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  ${fadeInAnimation};
  animation-duration: 2300ms;

  h1 {
    ${fadeInAnimation};
    animation-duration: 2500ms;
  }

  h2 {
    ${fadeInAnimation};
    animation-duration: 2700ms;
  }

  h3 {
    ${fadeInAnimation};
    animation-duration: 2900ms;
  }

  p {
    ${fadeInAnimation};
    animation-duration: 3100ms;
  }

  .resume {
    ${fadeInAnimation};
    animation-duration: 3300ms;
  }
`

export default Hero
