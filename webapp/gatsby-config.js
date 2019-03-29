/*********************************************************************************
 * WORKSHOP 03/29/2019 at Reactathon SF
 *
 * The site metadata will be accessible through GraphQL automatically.
 * For example, the "title" property will become our site title in layout.js.
*********************************************************************************/

module.exports = {
  siteMetadata: {
    title: `Shared Grocery List`,
    description: `App created during Create a Modern Web App with React workshop on March 23, 2019.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
