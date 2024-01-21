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
    title: "Senior Software Engineer",
    dateRange: "May 2022 - present",
    description:
      "Improbable creates new ways to connect, play, create and build value across interconnected virtual worlds",
    url: "https://www.improbable.io/",
    bulletPoints: [
      "Devised a server-side queuing system and reconciler for our virtual world environments using Node.js, Google Cloud, Firebase and Express, to efficiently manage the transition of over 15,000 concurrent users during our live events",
      "Built a serverless queuing system and reconciler to move and replace 15K+ users in our virtual worlds",
      "Responsible for designing and engineering robust back-end services using TypeScript, Node.js, Google Cloud, Fastify/Express, and Firebase for the management of our virtual events",
      "Led the overhaul of our front-end Next.js, React, Redux and TypeScript code into seven shared and modular Github packages, which are used across more than eight repositories, reducing bugs and boosting efficiency",
      "Lead and mentor a team of four engineers, driving project success and enhancing team collaboration",
      "Instrumental in the development of the different front-ends and back-end of our web platform, which has been used to host over 10 high profile live events, such as Yuga Labs’ Second Trip event",
      "Orchestrated the war-room operations for the web platform team during 5+ live events, delivering critical real-time updates and web metrics to a diverse team of 30+ employees."
    ],
    tech: "Node.js, Next.js, React, npm, Jest, React Testing Library, Typescript, Material UI, Express, Fastify, Firebase, Terraform, GCP",
  },
  [Tabs.ACRE]: {
    company: "Acre",
    title: "Software Engineer",
    dateRange: "January 2021 to March 2022",
    description:
      "Acre is an all-in-one mortgage platform, which serves both brokers and clients",
    url: "https://www.acresoftware.com",
    bulletPoints: [
      "Designed and implemented React and TypeScript code for our front-end and established a design system to ensure consistency across various repositories",
      "Championed and augmented test coverage through comprehensive unit testing, personally authoring all end-to-end tests which resulted in a 50% increase in test coverage",
      "Led the front-end overhaul of Acre’s mortgage sourcing application, greatly improving the overall user experience, which led to considerable praise from the brokers using our platform",
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
      "Project manager and systems integrator for the Bath University Rocket team",
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
      <Flex style={{ gap: theme.spacers.size16, minHeight: "330px" }}>
        <Flex
          flexDirection="column"
          style={{ borderLeft: `solid 1px ${theme.colors.faintColor}`, height: "400px" }}
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
  margin: 8px 0px 0px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.fontColor};
  padding: 0px 16px;
`

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacers.size8};
  gap: ${({ theme }) => theme.spacers.size8};
  display: list-item;
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  font-size: ${({ theme }) => theme.typography.fontSizes.size12};
`

const TabButton = styled.button<{ isActive?: boolean }>`
  flex: 1;
  cursor: pointer;
  background: transparent;
  border: none;
  width: 90px;
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
