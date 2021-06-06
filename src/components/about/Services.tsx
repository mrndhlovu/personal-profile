import React from "react"
import { useAirtableQuery } from "src/utils/graphql"

import Service from "./Service"

const Services = () => {
  const services = useAirtableQuery()?.services?.edges

  return (
    <div className="mi-service-wrapper">
      <div className="row mt-30-reverse">
        {services?.map(service => (
          <div
            className="col-lg-4 col-md-6 col-12 mt-30"
            key={service?.node?.id}
          >
            <Service
              title={service.node.data?.Title}
              details={service.node.data?.Detail}
              icon={service.node.data?.Icon_Name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
