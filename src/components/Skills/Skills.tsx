import { Flex } from "@rebass/grid"
import * as React from "react"
import { useRef, useState } from "react"
import styled from "styled-components"
import { useResponsiveLayout, useVisibleOnScreen } from "../../utils"
import { LAYOUT_VERTICAL } from "../../utils/hooks/useResponsiveLayout"
import { H2 } from "../Headers/Headers"
import { FadeInAndTranslateSection } from "../StyledComponents"

enum Tabs {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  PROGRAMMING = "PROGRAMMING",
  INFRASTRUCTURE = "INFRASTRUCTURE",
}

const skills = {
  [Tabs.FRONTEND]: [
    "React",
    "React Native",
    "GraphQL (Apollo)",
    "Testing",
    "NextJs",
    "HTML",
    "CSS",
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
    "Firebase",
    "GCP",
  ],
  [Tabs.INFRASTRUCTURE]: ["Docker", "AWS", "GCP", "Terraform"],
}

const Skills = () => {
  const isVertical = useResponsiveLayout() === LAYOUT_VERTICAL
  const [tab, setTab] = useState<Tabs>(Tabs.PROGRAMMING)
  const domRef = useRef<any>(null)
  const isVisible = useVisibleOnScreen(domRef, true)

  return (
    <StyledSection id="Skills" ref={domRef} isVisible={isVisible} as="section">
      <H2 className="numbered-header after-single-line">Skills</H2>
      <Flex
        width="100%"
        style={{
          overflow: "auto",
        }}
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
          isActive={tab === Tabs.INFRASTRUCTURE}
          onClick={() => setTab(Tabs.INFRASTRUCTURE)}
        >
          Infrastructure
        </TabButton>
      </Flex>
      <SkillList isVertical={isVertical}>
        {skills[tab]?.map((t: string, i: number) => (
          <SkillItem key={i}>{t}</SkillItem>
        ))}
      </SkillList>
    </StyledSection>
  )
}

const StyledSection = styled(FadeInAndTranslateSection)``

const SkillList = styled.ul<{ isVertical?: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, minmax(140px, 200px));

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, minmax(140px, 200px));
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(140px, 200px));
  }

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
    isActive
      ? `solid 2px ${theme.colors.primary}`
      : `solid 1px ${theme.colors.faintColor}`};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.faintColor};
  font-weight: ${({ isActive }) => (isActive ? "bold" : undefined)};
  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.fontColor};
    background: ${({ theme }) => theme.colors.faintColor};
    font-weight: bold;
    border-bottom: ${({ theme }) => `solid 2px ${theme.colors.primary}`};
  }
`

export default Skills
