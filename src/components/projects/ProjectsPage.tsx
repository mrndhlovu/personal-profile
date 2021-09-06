import React from "react"

import { SectionTitle } from "../shared"
import ProjectList from "./ProjectList"

const ProjectsPage = () => {
  return (
    <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        <SectionTitle title="Projects" />
        <ProjectList />
        {/* {!(portfolios.length > portfoliosPerPage) ? null : (
          <Pagination
            className="mt-50"
            itemsPerPage={portfoliosPerPage}
            totalItems={portfolios.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )} */}
      </div>
    </div>
  )
}

export default ProjectsPage
