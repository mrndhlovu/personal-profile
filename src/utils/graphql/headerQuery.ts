import { graphql, useStaticQuery } from "gatsby"
import { Unnamed_2_Query } from "../../../types/graphql-types"

type queryFunction = () => Unnamed_2_Query

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
