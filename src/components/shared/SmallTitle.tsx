import React, { ReactElement } from "react"
import { Maybe } from "gatsby/gatsby-graphql"

import { FiBriefcase, FiBook, FiCode } from "react-icons/fi"
import { FaNetworkWired } from "react-icons/fa"

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

      case "network":
        return <FaNetworkWired />

      default:
        return <></>
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
