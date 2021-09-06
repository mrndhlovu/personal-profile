import React, { ReactElement } from "react"
import { Maybe } from "gatsby/gatsby-graphql"

import { FiMonitor, FiDatabase } from "react-icons/fi"
import { RiPaletteLine } from "react-icons/ri"

type ServiceProps = {
  title: Maybe<string> | undefined
  details: Maybe<string> | undefined
  icon: Maybe<string> | undefined
}

const Service = ({ title, details, icon }: ServiceProps): ReactElement => {
  const Icon = () => {
    switch (icon) {
      case "monitor":
        return <FiMonitor />

      case "db":
        return <FiDatabase />

      default:
        return null
    }
  }
  return (
    <div className="mi-service">
      <span className="mi-service-icon">
        <Icon />
      </span>
      <h5>{title}</h5>
      <p>{details}</p>
    </div>
  )
}

export default Service
