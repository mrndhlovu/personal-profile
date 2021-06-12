import React from "react"
import { Airtable, AirtableData, Maybe } from "gatsby/gatsby-graphql"
import { SmallTitle } from "../shared"
import styled from "styled-components"

type Node = {
  node: Pick<Airtable, "data"> & {
    data?: Maybe<Pick<AirtableData, "Name">> | undefined
    id: string
  }
}

interface Props {
  title: Maybe<string> | undefined
  skills: Node[]
  iconName: string
}

const Container = styled.div`
  padding: 1rem;
  height: 100%;
`

const SkillsList = ({ title, skills, iconName }: Props) => {
  return (
    <Container>
      <SmallTitle title={`Part ${title}`} iconName={iconName} />
      <ul>
        {skills.map(skill => (
          <li key={skill?.node?.id}>
            <code> {skill?.node?.data?.Name} </code>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default SkillsList
