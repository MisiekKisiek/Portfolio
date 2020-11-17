const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve('./src/templates/project.js');
  const res = await graphql(`
  query{
    allContentfulWebpage{
      edges{
        node{
          slug
        }
      }
    }
  }
  `)

  res.data.allContentfulWebpage.edges.forEach(edge => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}