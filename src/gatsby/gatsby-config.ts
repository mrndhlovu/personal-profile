import {
  sourceGoogleFonts,
  siteMetadata,
  sourceWordpress,
  // sourceCodeGen,
  sourceAirtable,
} from "./plugins"

export default {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `babel-plugin-styled-components`,
      options: { ssr: false },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-scss-typescript`,
    `gatsby-plugin-tsconfig-paths`,
    // sourceCodeGen,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    sourceGoogleFonts,
    sourceWordpress,
    sourceAirtable,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-client-side-redirect`,
  ],
}
