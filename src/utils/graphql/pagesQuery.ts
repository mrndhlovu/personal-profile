import { graphql, useStaticQuery } from "gatsby"
import { Unnamed_3_Query } from "gatsby/gatsby-graphql"

type queryFunction = () => Unnamed_3_Query

// const seo: string = `{
//     title
//     metaDesc
//     cornerstone
//     canonical
//     focuskw
//     fullHead
//     metaRobotsNofollow
//     metaKeywords
//     metaRobotsNoindex
//     opengraphAuthor
//     opengraphDescription
//     opengraphModifiedTime
//     opengraphPublishedTime
//     opengraphPublisher
//     opengraphSiteName
//     opengraphTitle
//     opengraphType
//     opengraphUrl
//     readingTime
// }
//   `

const pagesQuery: queryFunction = () =>
  useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        edges {
          node {
            slug
            content
          }
        }
      }

      aboutPage: allWpPage(filter: { slug: { eq: "about" } }) {
        edges {
          node {
            slug
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            content
            aboutDetail {
              data {
                freelance
                location
                name
                skills
                resumeUrl
              }
            }
          }
        }
      }
    }
  `)

export default pagesQuery
