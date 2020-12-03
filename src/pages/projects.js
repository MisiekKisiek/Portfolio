import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

//Components
import Head from '../components/head';
import SingleProject from '../components/singleProject';

//Styles
import projectStyles from '../styles/projects.module.scss';

const Projects = () => {
  
  const projects = useStaticQuery(graphql`
  {
    allContentfulProjects{
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
          slug
        }
      }
    }
  }
  `)

  const renderProjects = () => {
    const projectList = projects.allContentfulProjects.edges.map(e => {
      return (
        <SingleProject node={e.node} key={e.node.id} />
      )
    })
    return projectList
  }
  return (
    <>
      <Head titleSecond="realizacje" />
      <main className={projectStyles.container}>
        <h1>Realizacje</h1>
        <section>
          {renderProjects()}
        </section>
      </main>
    </>
  );
}

export default Projects;