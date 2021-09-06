import React from "react"
import { Airtable, AirtableData, Maybe } from "gatsby/gatsby-graphql"

import { SmallTitle } from "../shared"

export type AirtableSkillNode = {
  node: Pick<Airtable, "id"> & {
    data?: Maybe<Pick<AirtableData, "Name">> | undefined
    id: string
  }
}

interface Props {
  title: Maybe<string> | undefined
  list: AirtableSkillNode[]
  iconName: string
}

const Skill = ({ title, list, iconName }: Props) => {
  return (
    <div className="justify-space-between">
      <SmallTitle title={title} iconName={iconName} />
      <ul>
        {list.map(skill => (
          <li key={skill?.node?.id}>{skill?.node?.data?.Name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Skill
