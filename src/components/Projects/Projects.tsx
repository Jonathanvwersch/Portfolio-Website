import * as React from "react"
import styled from "styled-components"
import { H2 } from ".."
import Project from "./Project"
// @ts-ignore
import ProjectDekked from "../../images/ProjectDekked.png"

const ProjectData = [
  {
    title: "Dekked",
    bulletPoints: [
      "Dekked is an integrated flashcard and note-taking application",
      "Raised £3250 in equity-free funding",
      "Added email and OAuth for authentication",
      "Designed the web app in Figma and developed the front-end using React and Typescript",
      "Created a design system to store all of the common React components",
      "Built the backend using Node.js, Postgres and Express Hosted the web app using Netlify on the front end, and Render for the API and database",
      "Developed tests using Cypress and React Testing Library, and created staging and production environments to allow for the safe development and integration of new code",
    ],
    skills: [
      "React",
      "React Query",
      "Styled Components",
      "NodeJs",
      "Express",
      "Render",
      "Netlify",
      "Gatsby",
    ],
    image: ProjectDekked,
    githubLink: "https://github.com/Jonathanvwersch",
  },
]

const Projects = () => {
  return (
    <section id="Projects">
      <H2 className="numbered-header after-single-line">Projects</H2>
      <ProjectsList>
        <ListItem>
          {ProjectData.map(props => (
            <Project {...props} key={props.title} />
          ))}
        </ListItem>
      </ProjectsList>
    </section>
  )
}

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacers.size20};
`

const ProjectsList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`

export default Projects
