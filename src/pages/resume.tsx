import React from "react"

import { Seo } from "../components/shared"
import ResumePage from "../components/resume/ResumePage"

const IndexPage = () => (
  <>
    <Seo title="Resume" description="My Resume" />
    <ResumePage />
  </>
)

export default IndexPage
