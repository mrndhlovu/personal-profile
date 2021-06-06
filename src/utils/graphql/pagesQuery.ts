import { graphql, useStaticQuery } from "gatsby"
import { Unnamed_4_Query } from "gatsby/gatsby-graphql"

type queryFunction = () => Unnamed_4_Query

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
      homePage: allWpPage(filter: { slug: { eq: "home" } }) {
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
                localFile {
                  small: childImageSharp {
                    fluid(maxWidth: 750, maxHeight: 565) {
                      srcWebp
                    }
                  }
                  large: childImageSharp {
                    fluid {
                      srcWebp
                    }
                  }
                }
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
