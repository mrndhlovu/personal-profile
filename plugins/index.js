const sourceGoogleFonts = {
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

const sourceCloudinaryContent = {
  resolve: `gatsby-transformer-cloudinary`,
  options: {
    cloudName: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.GATSBY_CLOUDINARY_KEY,
    apiSecret: process.env.GATSBY_CLOUDINARY_SECRET,
    resourceType: `image`,
    prefix: `profile/`,
  },
}

const siteMetadata = {
  title: "Hi, Im Mdu Im a Developer",
  description: `Im a Developer`,
  siteUrl: process.env.GATSBY_FRONTEND_URL,
  author: "@kandhlovu",
}

// const sourceWordpress = {
//   resolve: `gatsby-source-wordpress`,
//   options: {
//     url: process.env.BACKEND_API_ENDPOINT,
//     presets: null,
//     develop: {
//       nodeUpdateInterval: 300,
//       hardCacheData: false,
//     },
//     production: {
//       allow404Images: true,
//     },
//     schema: {
//       typePrefix: `wp`,
//       requestConcurrency: 50,
//       timeout: 60000,
//     },
//     excludeFieldNames: ["User"],
//   },
// }

// const sourceAirtable = {
//     resolve: `gatsby-source-airtable`,
//     options: {
//       apiKey: process.env.AIRTABLE_API_KEY,
//       concurrency: 5,
//       tables: [
//         {
//           baseId: process.env.AIRTABLE_RESTART_BASE_ID,
//           tableName: `Volunteers`,
//           defaultValues: {
//             Name: "",
//             Feature_on_website: false,
//             Status: "Pending",
//             End_At: "2-2-2000",
//             Date_Joined: "1/1/2000",
//           },
//         },
//         {
//           baseId: process.env.AIRTABLE_RESTART_BASE_ID,
//           tableName: `Team`,
//         },
//         {
//           baseId: process.env.AIRTABLE_RESTART_BASE_ID,
//           tableName: `Events`,
//           defaultValues: {
//             Postponed: false,
//             Seat_Total: 1,
//             Status: "Upcoming",
//             Contact_Email: "",
//             Coordinators: "",
//             Speakers: [],
//             Event: "Test",
//             Other_Price_Id: "",
//           },
//         },
//         {
//           baseId: process.env.AIRTABLE_STATIC_ASSETS_BASE_ID,
//           tableName: `Supporters List`,
//         },
//         {
//           baseId: process.env.AIRTABLE_STATIC_ASSETS_BASE_ID,
//           tableName: `Stripe Products`,
//           defaultValues: {
//             Other_Price_Id: "",
//           },
//         },
//       ],
//     },
//   }

module.exports = {
  sourceGoogleFonts,
  sourceCloudinaryContent,
  siteMetadata,
  // sourceWordpress,
}
