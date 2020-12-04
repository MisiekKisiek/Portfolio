const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve('./src/templates/projectTemplate.js');
  const res = await graphql(`
  query{
    allContentfulProjects{
      edges{
        node{
          slug
        }
      }
    }
  }
  `)

  res.data.allContentfulProjects.edges.forEach(edge => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      }
    })
  })
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const offerTemplate = path.resolve('./src/templates/offerTemplate.js');
  const res = await graphql(`
  query{
    allContentfulOffers{
      edges{
        node{
          slug
          offerName
        }
      }
    }
  }
  `)

  res.data.allContentfulOffers.edges.forEach(edge => {
    createPage({
      component: offerTemplate,
      path: `/offer/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        offerName: edge.node.offerName
      }
    })
  })
}