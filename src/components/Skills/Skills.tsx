import { Flex } from "@rebass/grid"
import * as React from "react"
import { useContext, useState } from "react"
import styled, { ThemeContext } from "styled-components"
import { SIZES } from "../../definitions"
import {
  ApolloIcon,
  CypressIcon,
  FigmaIcon,
  GitIcon,
  GraphQLIcon,
  HTMLIcon,
  JiraIcon,
  NodeJsIcon,
  PostgresSqlIcon,
  PythonIcon,
  ReactIcon,
  TypescriptIcon,
} from "../../icons"
import { useResponsiveLayout } from "../../utils"
import { LAYOUT_VERTICAL } from "../../utils/hooks/useResponsiveLayout"
import { H2 } from "../Headers/Headers"

enum Tabs {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  PROGRAMMING = "PROGRAMMING",
  OTHER = "OTHER",
}

const skills = {
  [Tabs.FRONTEND]: [
    "React",
    "React Native",
    "Styled Components",
    "GraphQL (Apollo)",
    "RTL/Jest/Enzyme",
    "Cypress",
    "RXJs",
    "NextJs",
    "Storybook",
    "React Query",
  ],
  [Tabs.PROGRAMMING]: [
    "Typescript",
    "Javascript",
    "CSS/HTML",
    "Python",
    "Data structures",
    "Algorithms",
  ],
  [Tabs.BACKEND]: [
    "NodeJs",
    "Express",
    "PostgreSQL",
    "Apollo Server",
    "REST APIs",
  ],
  [Tabs.OTHER]: [
    "Git",
    "Jira",
    "Public speaking",
    "Communication",
    "Collaboration",
    "Problem solving",
    "Figma",
  ],
}

const Skills = () => {
  const theme = useContext(ThemeContext)
  const isVertical = useResponsiveLayout() === LAYOUT_VERTICAL
  const [tab, setTab] = useState<Tabs>(Tabs.FRONTEND)
  console.log({ isVertical })

  // const icons = {
  //   [Tabs.FRONTEND]: (
  //     <>
  //       <ReactIcon size={SIZES.XLARGE} />
  //       <GraphQLIcon size={SIZES.XLARGE} />
  //       <CypressIcon size={SIZES.XLARGE} />
  //     </>
  //   ),
  //   [Tabs.PROGRAMMING]: (
  //     <>
  //       <TypescriptIcon size={SIZES.XLARGE} />
  //       <HTMLIcon size={SIZES.XLARGE} />
  //       <PythonIcon size={SIZES.XLARGE} />
  //     </>
  //   ),
  //   [Tabs.OTHER]: (
  //     <>
  //       <JiraIcon size={SIZES.XLARGE} />
  //       <GitIcon size={SIZES.XLARGE} />
  //       <FigmaIcon size={SIZES.XLARGE} />
  //     </>
  //   ),
  //   [Tabs.BACKEND]: (
  //     <>
  //       <PostgresSqlIcon size={SIZES.XLARGE} />
  //       <NodeJsIcon size={SIZES.XLARGE} />
  //       <ApolloIcon size={SIZES.XLARGE} />
  //     </>
  //   ),
  // }

  return (
    <section id="Skills">
      <H2 className="numbered-header after-single-line">Skills</H2>
      <Flex
        width="100%"
        style={{ borderBottom: `solid 1px ${theme.colors.faintColor}` }}
      >
        <TabButton
          isActive={tab === Tabs.PROGRAMMING}
          onClick={() => setTab(Tabs.PROGRAMMING)}
        >
          Programming
        </TabButton>
        <TabButton
          isActive={tab === Tabs.FRONTEND}
          onClick={() => setTab(Tabs.FRONTEND)}
        >
          Frontend
        </TabButton>
        <TabButton
          isActive={tab === Tabs.BACKEND}
          onClick={() => setTab(Tabs.BACKEND)}
        >
          Backend
        </TabButton>
        <TabButton
          isActive={tab === Tabs.OTHER}
          onClick={() => setTab(Tabs.OTHER)}
        >
          Other
        </TabButton>
      </Flex>
      <SkillList isVertical={isVertical}>
        {skills[tab]?.map((t: string, i: number) => (
          <SkillItem key={i}>{t}</SkillItem>
        ))}
      </SkillList>
    </section>
  )
}

const SkillList = styled.ul<{ isVertical?: boolean }>`
  display: grid;
  grid-template-columns: repeat(
    ${({ isVertical }) => (isVertical ? "2" : "4")},
    minmax(140px, 200px)
  );
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
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
  font-size: ${({ theme }) => theme.typography.fontSizes.size14};

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
  border-bottom: ${({ theme, isActive }) =>
    isActive && `solid 1px ${theme.colors.primary}`};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.fontColor : theme.colors.faintColor};
  &:hover {
    color: ${({ theme }) => theme.colors.fontColor};
    background: ${({ theme }) => theme.colors.faintColor};
    border-bottom: ${({ theme }) => `solid 1px ${theme.colors.primary}`};
  }
`

export default Skills
