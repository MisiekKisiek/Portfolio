const path = require('path');

module.exports = {
  siteMetadata: {
    title: "SmartHydro",
    author: "MisiekKisiek",
    email: "mail@mail.com",
    tel: "+48 504 111 555",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `img`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Comfortaa\:300,400,400i,700`,
          `Goldman\:800`
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/layouts/layout.js`)
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {

      }
    }
  ],
}
