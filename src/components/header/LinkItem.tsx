import React from "react"
import { Link } from "gatsby"

interface props {
  redirectTo: string
  text: string
}

const LinkItem = ({ redirectTo, text }: props) => {
  return (
    <li>
      <Link to={`/${redirectTo}`}>
        <span>{text}</span>
      </Link>
    </li>
  )
}

export default LinkItem
