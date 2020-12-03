import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

//Components
import Head from '../components/head';

//Styles
import offerStyles from '../styles/offer.module.scss';

const Offer = (props) => {

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

  console.log(props.curtine)

  return ( 
    <>
      <Head titleSecond="oferta" />
      <main className={offerStyles.main}>
        <h1 className={offerStyles.title}>Nasza oferta</h1>
        <div>
          <nav>
            <ul>
              <li>

              </li>
            </ul>
          </nav>
          <section>

          </section>
        </div>
      </main>
    </> );
}
 
export default Offer;