import React from "react"

import { SectionTitle, SmallTitle } from "../shared"
import { useAirtableQuery } from "src/utils/graphql"
import Resume from "./Resume"

const EducationHistory = () => {
  const workExperience = useAirtableQuery()?.workExperience?.edges
  const educationQualifications = useAirtableQuery()?.educationQualifications
    ?.edges

  return (
    <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        <SectionTitle title="Resume" />
        <SmallTitle title="Working Experience" iconName="briefcase" />
        <div className="mi-resume-wrapper">
          {workExperience?.map(workingExp => (
            <Resume
              key={workingExp?.node?.id}
              year={workingExp?.node?.data?.Year}
              title={workingExp?.node?.data?.Title}
              location={workingExp?.node?.data?.Location}
              detail={workingExp?.node?.data?.Detail}
            />
          ))}
        </div>
        <div className="mt-30"></div>
        <SmallTitle title="Educational Qualifications" iconName="book" />
        <div className="mi-resume-wrapper">
          {educationQualifications?.map(educationExp => (
            <Resume
              key={educationExp?.node?.id}
              year={educationExp?.node?.data?.Year}
              title={educationExp?.node?.data?.Title}
              location={educationExp?.node?.data?.Location}
              received={educationExp?.node?.data?.Received}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EducationHistory
