import React, { ReactElement } from "react"
import { Maybe } from "gatsby/gatsby-graphql"

import {
  FiBriefcase,
  FiBook,
  FiCode,
  FiMonitor,
  FiDatabase,
} from "react-icons/fi"

interface Props {
  iconName?: Maybe<string> | undefined
  title: Maybe<string> | undefined
}

const SmallTitle = ({ iconName, title }: Props): ReactElement => {
  const Icon = () => {
    switch (iconName) {
      case "book":
        return <FiBook />

      case "briefcase":
        return <FiBriefcase />

      case "code":
        return <FiCode />

      case "monitor":
        return <FiMonitor />

      case "db":
        return <FiDatabase />

      default:
        return null
    }
  }

  return (
    <div className="mi-smalltitle">
      <span className="mi-smalltitle-icon">{iconName && <Icon />}</span>
      <h4>{title}</h4>
    </div>
  )
}

export default SmallTitle
