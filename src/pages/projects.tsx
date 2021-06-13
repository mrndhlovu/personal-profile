import React from "react"

import { Seo } from "../components/shared"
import ProjectsPage from "src/components/projects/ProjectsPage"

const IndexPage = () => (
  <>
    <Seo title="Projects" description="project i have worked on." />
    <ProjectsPage />
  </>
)

export default IndexPage
