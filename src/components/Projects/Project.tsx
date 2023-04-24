import { Flex } from "@rebass/grid"
import { navigate } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import * as React from "react"
import { useContext, useState } from "react"
import styled, { ThemeContext } from "styled-components"
import { Button, ExternalLink, H3, H6, IconWrapper } from ".."
import { SIZES } from "../../definitions"
import { CloseIcon, GithubIcon, PlayIcon, WebsiteIcon } from "../../icons"

type Props = {
  title: string
  date: string
  bulletPoints: string[]
  skills: string[]
  image: IGatsbyImageData
  githubLink?: string
  videoLink?: string
  websiteLink?: string
}

const Project = ({
  title,
  bulletPoints,
  skills,
  image,
  githubLink,
  videoLink,
  date,
  websiteLink,
}: Props) => {
  console.log(websiteLink)
  const theme = useContext(ThemeContext)
  const [showDescription, setShowDescription] = useState<boolean>(false)

  return (
    <StyledProject>
      {/* Project image */}
      <GatsbyImage
        image={image}
        alt={`An image of the web page associated with the ${title} project`}
      />
      <HideContainer shouldHide={showDescription}>
        <HeaderWrapper>
          <H3 styledAs="h6">{title}</H3>
        </HeaderWrapper>
        <LearnMore>
          <Button handleClick={() => setShowDescription(true)}>
            Learn more
          </Button>
        </LearnMore>
      </HideContainer>
      <HideContainer shouldHide={!showDescription}>
        <IconWrapper
          styles={{
            position: "absolute",
            top: theme.spacers.size4,
            right: theme.spacers.size4,
            zIndex: 1,
          }}
          as="button"
          handleClick={() => setShowDescription(false)}
          ariaLabel="Close project description overlay"
        >
          <CloseIcon size={SIZES.LARGE} />
        </IconWrapper>

        <Description>
          <Flex justifyContent="space-between">
            <H3 styledAs="h5">{title}</H3>
            <p>{date}</p>
          </Flex>

          <BulletPointsWrapper>
            {bulletPoints.map(b => (
              <li key={b}>{b}</li>
            ))}
          </BulletPointsWrapper>
          <Skills>
            {skills.map((s, i) => (
              <li key={s}>{`${s}${i === skills.length - 1 ? "" : " •"}`}</li>
            ))}
          </Skills>

          {githubLink || videoLink || websiteLink ? (
            <Flex
              style={{ gap: theme.spacers.size16 }}
              alignItems="center"
              mt={theme.spacers.size20}
            >
              {videoLink && (
                <Button handleClick={() => navigate(videoLink)}>
                  <Flex
                    style={{ gap: theme.spacers.size8 }}
                    alignItems="center"
                  >
                    Watch video <PlayIcon />
                  </Flex>
                </Button>
              )}
              {githubLink && (
                <ExternalLink
                  href={githubLink}
                  ariaLabel={`Github link for project with name ${title}`}
                >
                  <GithubIcon size={SIZES.XLARGE} />
                </ExternalLink>
              )}
              {websiteLink && (
                <ExternalLink
                  href={websiteLink}
                  ariaLabel={`Website link for project with name ${title}`}
                >
                  <WebsiteIcon size={SIZES.XLARGE} />
                </ExternalLink>
              )}
            </Flex>
          ) : null}
        </Description>
      </HideContainer>
    </StyledProject>
  )
}

const HideContainer = styled.div<{ shouldHide?: boolean }>`
  opacity: ${({ shouldHide }) => (shouldHide ? 0 : undefined)};
  transition: opacity 500ms ${({ theme }) => theme.transition};
  visibility: ${({ shouldHide }) => (shouldHide ? "hidden" : undefined)};
`

const StyledProject = styled.div`
  background: ${({ theme }) => theme.colors.backgrounds.modalBackground};
  min-height: 400px;
  overflow: hidden;
  position: relative;
  z-index: 0;
  border-radius: ${({ theme }) => theme.sizes.borderRadius[SIZES.MEDIUM]};
  background-size: cover;
  border: solid 1px ${({ theme }) => theme.colors.primary};

  img {
    object-fit: cover;
  }

  .gatsby-image-wrapper {
    position: unset;
  }

  @media screen and (max-width: 800px) {
    li {
      font-size: ${({ theme }) => theme.typography.fontSizes.size12}!important;
    }
  }
`

const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  position: relative;
  font-size: ${({ theme }) => theme.typography.fontSizes.size14};
  margin-bottom: ${({ theme }) => theme.spacers.size16};

  font-family: ${({ theme }) => theme.typography.fontFamilyMono};

  z-index: 2;
  margin: 25px 0px 10px;
  padding: 0px;
  list-style: none;
  li {
    white-space: nowrap;
    margin: 0px ${({ theme }) => theme.spacers.size8}
      ${({ theme }) => theme.spacers.size4} 0px;
  }
`

const BulletPointsWrapper = styled.ul`
  padding-left: 0px;
  margin-top: ${({ theme }) => theme.spacers.size20};

  li {
    margin-bottom: ${({ theme }) => theme.spacers.size8};
    font-size: ${({ theme }) => theme.typography.fontSizes.size16};
    display: flex;
    flex-direction: row;
    list-style: none;

    :before {
      margin-right: ${({ theme }) => theme.spacers.size12};
      content: "▹";
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const Description = styled.div`
  background: ${({ theme }) => theme.colors.backgrounds.modalBackground};
  width: 100%;
  min-height: 400px;
  height: 100%;
  padding: ${({ theme }) => theme.spacers.size32};
  color: ${({ theme }) => theme.colors.fontColor};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
`

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-left: none;
  border-top: none;
  padding: ${({ theme }) => theme.spacers.size16};
  background: ${({ theme }) => theme.colors.backgrounds.modalBackground};
  border-bottom-right-radius: ${({ theme }) =>
    theme.sizes.borderRadius[SIZES.MEDIUM]};
`

const LearnMore = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
  border: none;
  border-top-left-radius: ${({ theme }) =>
    theme.sizes.borderRadius[SIZES.MEDIUM]};
  padding: ${({ theme }) => theme.spacers.size16};
  background: ${({ theme }) => theme.colors.backgrounds.modalBackground};
`

export default Project
