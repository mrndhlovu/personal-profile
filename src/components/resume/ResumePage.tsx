import React, { ReactElement } from "react"

import EducationHistory from "./EducationHistory"
import Skills from "./Skills"

const ResumePage = (): ReactElement => {
  return (
    <>
      <Skills />
      <EducationHistory />
    </>
  )
}

export default ResumePage
