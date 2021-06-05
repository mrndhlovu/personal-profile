import { graphql, useStaticQuery } from "gatsby"

interface Query {
  allWpPage: {
    edges: [
      {
        node: {
          slug: string
          content: string
        }
      }
    ]
  }
}

type queryFunction = () => Query

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
    }
  `)

export default pagesQuery
