import { graphql, useStaticQuery } from "gatsby"
import { Unnamed_2_Query } from "gatsby/gatsby-graphql"

export type queryFunction = () => Unnamed_2_Query

const airtableQuery: queryFunction = () =>
  useStaticQuery(graphql`
    {
      services: allAirtable(filter: { table: { eq: "Services" } }) {
        edges {
          node {
            data {
              Icon_Name
              Title
              Detail
            }
            id
          }
        }
      }

      reviews: allAirtable(filter: { table: { eq: "Reviews" } }) {
        edges {
          node {
            data {
              Name
              Detail
              Designation
            }
            id
          }
        }
      }
    }
  `)

export default airtableQuery
