import {
  sourceGoogleFonts,
  sourceCloudinaryContent,
  siteMetadata,
  sourceWordpress,
  sourceTypescript,
} from "./plugins"

export default {
  siteMetadata,
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scss-typescript`,
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: `babel-plugin-styled-components`,
      options: { ssr: false },
    },
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
    sourceTypescript,
    sourceGoogleFonts,
    sourceWordpress,
    sourceCloudinaryContent,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-client-side-redirect`,
  ],
}
