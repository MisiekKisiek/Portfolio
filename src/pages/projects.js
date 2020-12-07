import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

//Components
import Head from '../components/head';
import SingleProject from '../components/singleProject';
import AsideMenu from '../components/asideMenu';

//Styles
import projectStyles from '../styles/projects.module.scss';

//Utils
import paths from '../utils/paths';

const Projects = () => {

  const projects = useStaticQuery(graphql`
  {
    allContentfulProjects{
      edges{
        node{
          id
          name
          description{
            json
            content{
              content{
                value
              }
            }
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
        <div>
          <AsideMenu query={projects.allContentfulProjects} path={paths.project} />
          <section>
            {renderProjects()}
          </section>
        </div>
      </main>
    </>
  );
}

export default Projects;