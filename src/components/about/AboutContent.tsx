import React from "react"
import { WpPage_Aboutdetail_Data, Maybe } from "gatsby/gatsby-graphql"
import styled from "styled-components"

type Props = {
  data:
    | Maybe<
        Pick<
          WpPage_Aboutdetail_Data,
          "freelance" | "location" | "name" | "skills" | "resumeUrl"
        >
      >
    | undefined
}

const Container = styled.ul`
  li {
    list-style: none;
    display: flex;

    &:not(:last-child) {
      margin-bottom: 3px;
    }

    b {
      min-width: 120px;
      display: inline-block;
      position: relative;
      margin-right: 7px;

      &:after {
        content: ":";
        position: absolute;
        top: 0;
        left: auto;
        right: 0;
      }
    }
  }
`

const AboutContent = ({ data }: Props) => {
  return (
    <Container>
      {data?.name && (
        <li>
          <b>Full Name</b> {data.name}
        </li>
      )}

      {process.env.GATSBY_DEFAULT_EMAIL && (
        <li>
          <b>Email</b> {process.env.GATSBY_DEFAULT_EMAIL}
        </li>
      )}
      {data?.location && (
        <li>
          <b>Location</b> {data.location}
        </li>
      )}
      {data?.freelance && (
        <li>
          <b>Freelance</b>
          {data?.freelance ? "Available" : "Not Available"}
        </li>
      )}
    </Container>
  )
}

export default AboutContent
