import React from "react"
import { useAirtableQuery } from "src/utils/graphql"

import { SectionTitle } from "../shared"
import Skill from "./Skill"

const Skills = () => {
  const { frontend, backend } = useAirtableQuery()

  return (
    <div className="mi-skills-area mi-section mi-padding-top">
      <div className="container">
        <SectionTitle title="Tech stack" />
        <div className="mi-skills">
          <Skill title="Frontend" list={frontend.edges} iconName="monitor" />
          <Skill title="Backend" list={backend.edges} iconName="db" />
        </div>
      </div>
    </div>
  )
}

export default Skills
