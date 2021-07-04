const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const offerTemplate = path.resolve('./src/templates/offerTemplate.js');
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
    allContentfulOffers{
      edges{
        node{
          slug
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
      }
    })
  })

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

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-leaflet|leaflet/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}