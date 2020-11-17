import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

//Components
import SingleProject from '../components/singleProject';

//Styles
import projectStyles from '../styles/projects.module.scss';

const Projects = () => {
  const projects = useStaticQuery(graphql`
  {
    allContentfulWebpage{
      edges{
        node{
          id
          projectName
          projectDescription{
            projectDescription
          }
          image { 
            fluid(maxWidth: 800){
              src
            }
          }
        }
      }
    }
  }
  `)

  const renderProjects = () => {
    const projectList = projects.allContentfulWebpage.edges.map(e => {
      return (
        <SingleProject node={e.node} key={e.node.id} />
      )
    })
    return projectList
  }
  return (
    <main className={projectStyles.container}>
      <h1>Realizacje</h1>
      <section>
        {renderProjects()}
      </section>
    </main>
  );
}

export default Projects;