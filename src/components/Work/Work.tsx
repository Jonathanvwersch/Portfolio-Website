import { Box, Flex } from "@rebass/grid"
import * as React from "react"
import { useContext, useRef, useState } from "react"
import styled, { ThemeContext } from "styled-components"
import { Paragraph, H2, H3, H4, ExternalLink } from "../"
import { useVisibleOnScreen } from "../../utils"
import { FadeInAndTranslateSection } from "../StyledComponents"

enum Tabs {
  ACRE = "ACRE",
  IMPROBABLE = "IMPROBABLE",
  UOB = "UOB",
}

type JobType = {
  [key: string]: {
    company: string
    title: string
    dateRange: string
    description: string
    url: string
    bulletPoints: string[]
    tech?: string
  }
}

const jobs: JobType = {
  [Tabs.IMPROBABLE]: {
    company: "Improbable",
    title: "Software Engineer",
    dateRange: "May 2022 - present",
    description:
      "Improbable creates new ways to connect, play, create and build value across interconnected virtual worlds",
    url: "https://www.improbable.io/",
    bulletPoints: [
      "Aided in the development of both the front and back-end for our web platform during 2 high profile live events whose success led to new clients as well as profitability at the company",
      "Built a serverless queuing system and reconciler to move and replace 15K+ users in our virtual worlds",
      "Managed the war room for the web platform team during live virtual events, providing realtime updates and web metrics to a cross-functional team of 30+ employees",
      "Spearheaded the adoption of unit, integration, and end-to-end testing across the web platform mono-repo, resulting in the highest test coverage among all repositories at Improbable",
      "Mentored two graduate engineers on coding practices and design principles",
    ],
    tech: "React, Jest, React Testing Library, Typescript, Material UI, Node, Express, Firebase, GCP",
  },
  [Tabs.ACRE]: {
    company: "Acre",
    title: "Software Engineer",
    dateRange: "January 2021 to March 2022",
    description:
      "Acre is an all-in-one mortgage platform, which serves both brokers and clients",
    url: "https://www.acresoftware.com",
    bulletPoints: [
      "Developed components using React and Typescript, and led the creation of a design system to improve standardisation across repositories",
      "Pushed for the adoption and enforcement of more unit tests and wrote all end-to-end tests, resulting in a large increase in the overall test coverage of our mono-repo",
      "Independently re-developed much of the front-end of Acre’s mortgage sourcing application, resulting in it being considered the favourite part of our app by mortgage brokers",
    ],
    tech: "React, GraphQL (Apollo), React Testing Library, Cypress, Typescript, Styled Components, React Final Form, React Native",
  },
  [Tabs.UOB]: {
    company: "University of Bath",
    title: "Student",
    dateRange: "September 2015 to July 2020",
    description:
      "Completed an integrated masters in mechanical engineering graduating with first-class honours",
    url: "https://www.acresoftware.com",
    bulletPoints: [
      "Modules studied include System Modelling and Simulation, Design, Fluid Dynamics, Systems and Control, Solid Mechanics, Design, and Business Processes",
      "Played a number of sports throughout my time at university, such as football, basketball, and volleyball",
    ],
  },
}

const Work = () => {
  const theme = useContext(ThemeContext)
  const [tab, setTab] = useState<Tabs>(Tabs.IMPROBABLE)
  const domRef = useRef<any>(null)
  const isVisible = useVisibleOnScreen(domRef, true)

  const {
    company,
    title,
    dateRange,
    description,
    bulletPoints = [],
    tech = "",
    url,
  } = jobs[tab]

  const Job = (
    <Flex flexDirection="column" style={{ gap: theme.spacers.size8 }}>
      <H3 styledAs="h5">
        <ExternalLink textDecoration="underline" href={url}>
          {company}
        </ExternalLink>
      </H3>
      <H4 styledAs="h6">{title}</H4>
      <Paragraph fontFamily={theme.typography.fontFamilyMono}>
        {dateRange}
      </Paragraph>
      <Box mt={theme.spacers.size16}>
        <Paragraph fontColor={theme.colors.fontHighlight} fontWeight="bold">
          {description}
        </Paragraph>
      </Box>
      <SkillList>
        {bulletPoints?.map((d: string, i: number) => (
          <SkillItem key={i}>{d}</SkillItem>
        ))}
      </SkillList>
      <Paragraph fontFamily={theme.typography.fontFamilyMono}>{tech}</Paragraph>
    </Flex>
  )

  return (
    <StyledSection id="Work" ref={domRef} isVisible={isVisible} as="section">
      <H2 className="numbered-header after-single-line">Work and Education</H2>
      <Flex style={{ gap: theme.spacers.size32, minHeight: "330px" }}>
        <Flex
          flexDirection="column"
          style={{ borderLeft: `solid 1px ${theme.colors.faintColor}` }}
        >
          <TabButton
            isActive={tab === Tabs.IMPROBABLE}
            onClick={() => setTab(Tabs.IMPROBABLE)}
          >
            Improbable
          </TabButton>
          <TabButton
            isActive={tab === Tabs.ACRE}
            onClick={() => setTab(Tabs.ACRE)}
          >
            Acre
          </TabButton>
          <TabButton
            isActive={tab === Tabs.UOB}
            onClick={() => setTab(Tabs.UOB)}
          >
            UoB
          </TabButton>
        </Flex>
        {Job}
      </Flex>
    </StyledSection>
  )
}

const StyledSection = styled(FadeInAndTranslateSection)``

const SkillList = styled.ul`
  gap: 0px 10px;
  padding: 0px;
  margin: 8px 0px 0px;
  overflow: hidden;
  list-style: none;
  color: ${({ theme }) => theme.colors.fontColor};
`

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacers.size8};
  gap: ${({ theme }) => theme.spacers.size8};
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  font-size: ${({ theme }) => theme.typography.fontSizes.size12};

  :before {
    content: "▹";
    color: ${({ theme }) => theme.colors.primary};
  }
`

const TabButton = styled.button<{ isActive?: boolean }>`
  flex: 1;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacers.size8};
  border-left: ${({ theme, isActive }) =>
    isActive && `solid 2px ${theme.colors.primary}`};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.faintColor};
  text-align: left;
  font-weight: ${({ isActive }) => (isActive ? "bold" : undefined)};

  &:hover,
  &:focus-visible {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.fontColor};
    background: ${({ theme }) => theme.colors.faintColor};
    border-left: ${({ theme }) => `solid 2px ${theme.colors.primary}`};
  }
`

export default Work
