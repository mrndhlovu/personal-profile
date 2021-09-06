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

      projects: allAirtable(
        filter: { table: { eq: "Projects" } }
        sort: { fields: data___Item_Number }
      ) {
        edges {
          node {
            data {
              Name
              Image {
                thumbnails {
                  full {
                    url
                  }
                  large {
                    url
                  }
                }
              }
              Github_Link
              Live_URL
              Skills {
                data {
                  Name
                }
              }
            }
            id
          }
        }
      }

      frontend: allAirtable(
        filter: {
          table: { eq: "Skills" }
          data: { Field: { eq: "developer" }, category: { eq: "frontend" } }
        }
      ) {
        edges {
          node {
            id
            data {
              Name
            }
          }
        }
      }

      backend: allAirtable(
        filter: {
          table: { eq: "Skills" }
          data: { Field: { eq: "developer" }, category: { eq: "backend" } }
        }
      ) {
        edges {
          node {
            id
            data {
              Name
            }
          }
        }
      }
      networkingSkills: allAirtable(
        filter: {
          table: { eq: "Skills" }
          data: { Field: { eq: "networking" } }
        }
      ) {
        edges {
          node {
            id
            data {
              Name
            }
          }
        }
      }

      workExperience: allAirtable(
        filter: {
          table: { eq: "Resume" }
          data: { Type: { eq: "experience" } }
        }
      ) {
        edges {
          node {
            id
            data {
              Title
              Type
              Year
              Location
              Detail
            }
          }
        }
      }

      educationQualifications: allAirtable(
        filter: { table: { eq: "Resume" }, data: { Type: { eq: "education" } } }
      ) {
        edges {
          node {
            id
            data {
              Title
              Type
              Year
              Location
              Received
            }
          }
        }
      }
    }
  `)

export default airtableQuery
