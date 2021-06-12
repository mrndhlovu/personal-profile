import React from "react"

import { SectionTitle } from "../shared"
import SkillChart from "./SkillChart"

const Skills = () => {
  return (
    <div className="mi-skills-area mi-section mi-padding-top">
      <div className="container">
        <SectionTitle title="My Skills" />
        <div className="mi-skills">
          <div className="row">
            <SkillChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
