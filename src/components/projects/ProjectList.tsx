import React from "react"

import { useAirtableQuery } from "src/utils/graphql"

import Portfolio from "./Portfolio"

const ProjectList = () => {
  const projects = useAirtableQuery()?.projects?.edges

  return (
    <div className="row mt-30-reverse">
      {projects?.map(project => (
        <div className="col-lg-4 col-md-6 col-12 mt-30" key={project?.node?.id}>
          <Portfolio
            largeImg={project?.node?.data?.Image?.[0]?.thumbnails?.full?.url}
            smallImg={project?.node?.data?.Image?.[0]?.thumbnails?.large?.url}
            title={project?.node?.data?.Name}
            liveUrl={project?.node?.data?.Live_URL}
            gitHubUrl={project?.node?.data?.Github_Link}
            skills={project?.node?.data?.Skills}
          />
        </div>
      ))}
    </div>
  )
}

export default ProjectList
