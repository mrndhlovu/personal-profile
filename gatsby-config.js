const {
  sourceGoogleFonts,
  sourceCloudinaryContent,
  siteMetadata,
  sourceWordpress,
  sourceTypescript,
} = require("./utils/plugins")

module.exports = {
  siteMetadata,
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    sourceTypescript,
    sourceGoogleFonts,
    sourceWordpress,
    sourceCloudinaryContent,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-client-side-redirect`,
  ],
}
