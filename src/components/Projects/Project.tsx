import { Flex } from "@rebass/grid"
import { navigate } from "gatsby"
import * as React from "react"
import { useContext, useState } from "react"
import styled, { ThemeContext } from "styled-components"
import { Button, ExternalLink, H3, IconWrapper } from ".."
import { SIZES } from "../../definitions"
import { CloseIcon, GithubIcon, PlayIcon } from "../../icons"

type Props = {
  title: string
  bulletPoints: string[]
  skills: string[]
  image: any
  githubLink?: string
  videoLink?: string
}

const Project = ({
  title,
  bulletPoints,
  skills,
  image,
  githubLink,
  videoLink,
}: Props) => {
  const theme = useContext(ThemeContext)
  const [showDescription, setShowDescription] = useState<boolean>(false)

  return (
    <DescriptionWrapper image={image}>
      {!showDescription && (
        <HeaderWrapper>
          <H3 styledAs="h6">{title}</H3>
        </HeaderWrapper>
      )}

      {!showDescription && (
        <LearnMore>
          <Button handleClick={() => setShowDescription(true)}>
            Learn more
          </Button>
        </LearnMore>
      )}
      {showDescription && (
        <>
          <IconWrapper
            styles={{
              position: "absolute",
              top: theme.spacers.size8,
              right: theme.spacers.size8,
              zIndex: 1,
            }}
            as="button"
            handleClick={() => setShowDescription(false)}
            ariaLabel="Close project description overlay"
          >
            <CloseIcon size={SIZES.LARGE} />
          </IconWrapper>

          <Description>
            <H3 styledAs="h5">{title}</H3>
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

            {githubLink || videoLink ? (
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
                  <ExternalLink href={githubLink} openInNewTab>
                    <GithubIcon size={SIZES.XLARGE} />
                  </ExternalLink>
                )}
              </Flex>
            ) : null}
          </Description>
        </>
      )}
    </DescriptionWrapper>
  )
}

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

const DescriptionWrapper = styled.div<{ image: any }>`
  background: ${({ theme }) => theme.colors.backgrounds.modalBackground};
  min-height: 400px;
  overflow: hidden;
  z-index: 0;
  position: relative;
  background-image: ${({ image }) => `url(${image})`};
  border-radius: ${({ theme }) => theme.sizes.borderRadius[SIZES.MEDIUM]};
  background-size: cover;
  border: solid 1px ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 800px) {
    li {
      font-size: ${({ theme }) => theme.typography.fontSizes.size12}!important;
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
  border: none;
  border-top-left-radius: ${({ theme }) =>
    theme.sizes.borderRadius[SIZES.MEDIUM]};
  padding: ${({ theme }) => theme.spacers.size16};
  background: ${({ theme }) => theme.colors.backgrounds.modalBackground};
`

export default Project
