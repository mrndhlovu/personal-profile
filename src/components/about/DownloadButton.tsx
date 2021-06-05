import { Maybe } from "gatsby/gatsby-graphql"
import React from "react"

type ButtonProps = {
  downloadSource: Maybe<string> | undefined | null
}

const DownloadButton = ({ downloadSource }: ButtonProps): JSX.Element => {
  return (
    <a
      target="__blank"
      rel="noreferrer"
      href={downloadSource || ""}
      className="mi-button"
      download
    >
      Download CV
    </a>
  )
}

export default DownloadButton
