import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

import { Maybe, Scalars } from "../../../types/graphql-types"

interface IProps {
  redirectTo?: Maybe<Scalars["String"]>
  text?: Maybe<Scalars["String"]>
}

const LinkItem: React.FC<IProps> = ({ redirectTo, text }) => {
  const { pathname } = useLocation()
  const isActive = pathname === redirectTo

  return (
    <li>
      <Link to={`${redirectTo}`} className={isActive ? "active" : ""}>
        <span>{text}</span>
      </Link>
    </li>
  )
}

export default LinkItem
