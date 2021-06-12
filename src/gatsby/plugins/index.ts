import dotenv from "dotenv"

dotenv.config({ path: ".env" })

export const sourceGoogleFonts = {
  resolve: `gatsby-plugin-google-fonts`,
  options: {
    fonts: [
      `Nunito:300,400,400i,600,700,800`,
      `Montserrat:200,300,400,400i,500,700`,
      `Questrial:200,300,400,400i,500,700`,
      `source sans pro\:200,300,400,400i,500,700`, // you can also specify font weights and styles
    ],
    display: "swap",
  },
}

export const sourceCloudinaryContent = {
  resolve: `gatsby-transformer-cloudinary`,
  options: {
    cloudName: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.GATSBY_CLOUDINARY_KEY,
    apiSecret: process.env.GATSBY_CLOUDINARY_SECRET,
    resourceType: `image`,
    prefix: `profile/`,
  },
}

export const siteMetadata = {
  title: "Hi, Im Mdu Im a Developer",
  description: `Im a Developer`,
  siteUrl: process.env.GATSBY_FRONTEND_URL,
  author: "@kandhlovu",
}

export const sourceWordpress = {
  resolve: `gatsby-source-wordpress`,
  options: {
    url: process.env.BACKEND_API_ENDPOINT,
    presets: null,
    develop: {
      nodeUpdateInterval: 300,
      hardCacheData: false,
    },
    production: {
      allow404Images: true,
    },
    schema: {
      typePrefix: `wp`,
      requestConcurrency: 50,
      timeout: 60000,
    },
    excludeFieldNames: ["User"],
  },
}

export const sourceCodeGen = {
  resolve: `gatsby-plugin-graphql-codegen`,
  options: {
    fileName: `./gatsby/gatsby-graphql.ts`,
  },
}

export const sourceAirtable = {
  resolve: `gatsby-source-airtable`,
  options: {
    apiKey: process.env.AIRTABLE_API_KEY,
    concurrency: 6,
    tables: [
      {
        baseId: process.env.AIRTABLE_WEBSITE_BASE,
        tableName: `Services`,
      },
      {
        baseId: process.env.AIRTABLE_WEBSITE_BASE,
        tableName: `Reviews`,
      },

      {
        baseId: process.env.AIRTABLE_WEBSITE_BASE,
        tableName: `Resume`,
      },

      {
        baseId: process.env.AIRTABLE_WEBSITE_BASE,
        tableName: `Skills`,
        tableLinks: [`Projects`],
      },
      {
        baseId: process.env.AIRTABLE_WEBSITE_BASE,
        tableName: `Projects`,
        tableLinks: [`Skills`],
      },
    ],
  },
}
