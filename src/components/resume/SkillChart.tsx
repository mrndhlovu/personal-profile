import React from "react"
import { PieChart } from "react-minimal-pie-chart"
import { LabelRenderProps } from "react-minimal-pie-chart/types/Label"
import { Data } from "react-minimal-pie-chart/types/commonTypes"

import { useAirtableQuery } from "src/utils/graphql"
import SkillsList from "./SkillsList"

const SkillChart = () => {
  const developerSkills = useAirtableQuery()?.developerSkills?.edges
  const networkingSkills = useAirtableQuery()?.networkingSkills?.edges

  const shiftSize = 7
  const skills: Data = [
    { title: "Network Engineer", value: 30, color: "#434343" },
    { title: "Developer", value: 70, color: "#c3c3c3" },
  ]

  const options = {
    data: skills,
    label: ({ dataEntry }: LabelRenderProps) => dataEntry.title,
    startAngle: -50,
    radius: 30,
    labelStyle: {
      fontSize: "3px",
      fontWeight: 700,
      color: "#fff",
    },
    segmentsShift: (segmentIndex: number) =>
      segmentIndex === 0 ? shiftSize : 0.5,
  }

  return (
    <div className="mi-skills-content">
      <div className="mi-skills-chart">
        <SkillsList
          title="Web Developer"
          skills={developerSkills}
          iconName="code"
        />
        <div className="chart">
          <PieChart {...options} />
        </div>

        <SkillsList
          title="Network Engineer"
          skills={networkingSkills}
          iconName="network"
        />
      </div>
    </div>
  )
}

export default SkillChart
