const {
  sourceGoogleFonts,
  sourceManiFest,
  sourceCloudinaryContent,
  siteMetadata,
} = require("./plugins")

module.exports = {
  siteMetadata,
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sass`,
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
    sourceManiFest,
    sourceGoogleFonts,
    sourceCloudinaryContent,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-client-side-redirect`,
  ],
}
