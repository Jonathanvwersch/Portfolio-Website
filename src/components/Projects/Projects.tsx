import * as React from "react"
import styled from "styled-components"
import { H2 } from ".."
import Project from "./Project"
import { useVisibleOnScreen } from "../../utils"
import { useRef } from "react"
import { FadeInAndTranslateSection } from "../StyledComponents"
import { ProjectData } from "./Project.helpers"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const Projects = () => {
  const domRef = useRef()
  const isVisible = useVisibleOnScreen(domRef, true)
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "images/projects" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `)

  return (
    <section id="Projects" ref={domRef}>
      <FadeInAndTranslateSection isVisible={isVisible}>
        <H2 className="numbered-header after-single-line">Projects</H2>
        <ProjectsList>
          <ListItem>
            {ProjectData.map((props, i) => {
              return (
                <Project
                  {...props}
                  key={props.title}
                  image={
                    data.allFile.edges[i].node.childImageSharp.gatsbyImageData
                  }
                />
              )
            })}
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
