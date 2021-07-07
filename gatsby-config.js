const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Janusz Filipczyk Smarthydro",
    author: "MisiekKisiek",
    email: "jmfilipczyk@gmail.com",
    tel: "+48 791 393 290",
    adress: "30-716 Kraków , Przewóz 32D lok. 9",
    nip: "6751329560",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // spaceId: process.env.CONTENTFUL_SPACE_ID,
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: "h52rsxy6p2if",
        accessToken: "bP2mDkKr2lwoqW5vjlo-gav6X3x-dXgLwfk9fH9RnyE",
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
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
      }
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/layouts/layout.js`)
      }
    },
  ],
}
