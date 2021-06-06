import React, { ReactElement } from "react"
import { Maybe } from "gatsby/gatsby-graphql"

import { FiCode } from "react-icons/fi"
import { FaPalette } from "react-icons/fa"

type ServiceProps = {
  title: Maybe<string> | undefined
  details: Maybe<string> | undefined
  icon: Maybe<string> | undefined
}

const Service = ({ title, details, icon }: ServiceProps): ReactElement => {
  const Icon = () => {
    switch (icon) {
      case "code":
        return <FiCode />

      case "pallet":
        return <FaPalette />

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
