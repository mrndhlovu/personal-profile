import { graphql, useStaticQuery } from "gatsby"
import { Unnamed_3_Query } from "gatsby/gatsby-graphql"

type queryFunction = () => Unnamed_3_Query

const headerQuery: queryFunction = () =>
  useStaticQuery(graphql`
    {
      menu: allWpMenu {
        edges {
          node {
            menuItems {
              nodes {
                id
                path
                label
              }
            }
          }
        }
      }

      user: wpUser {
        firstName
        lastName
      }
    }
  `)

export default headerQuery
