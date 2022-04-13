import * as React from "react"
import styled from "styled-components"
import { H2 } from ".."
import Project from "./Project"
// @ts-ignore
import { useVisibleOnScreen } from "../../utils"
import { useRef } from "react"
import { FadeInAndTranslateSection } from "../StyledComponents"
import { ProjectData } from "./Project.helpers"

const Projects = () => {
  const domRef = useRef()
  const isVisible = useVisibleOnScreen(domRef, true)

  return (
    <section id="Projects" ref={domRef}>
      <FadeInAndTranslateSection isVisible={isVisible}>
        <H2 className="numbered-header after-single-line">Projects</H2>
        <ProjectsList>
          <ListItem>
            {ProjectData.map(props => (
              <Project {...props} key={props.title} />
            ))}
          </ListItem>
        </ProjectsList>
      </FadeInAndTranslateSection>
    </section>
  )
}

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacers.size32};
`

const ProjectsList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`

export default Projects
