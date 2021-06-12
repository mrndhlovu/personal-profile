import { Maybe } from "gatsby/gatsby-graphql"
import React, { ReactElement } from "react"

type Props = {
  received?: Maybe<string> | undefined
  detail?: Maybe<string> | undefined
  location: Maybe<string> | undefined
  title: Maybe<string> | undefined
  year: Maybe<string> | undefined
}

const Resume = ({
  year,
  title,
  location,
  detail,
  received,
}: Props): ReactElement => {
  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{title}</h5>
        <h6 className="mi-resume-company">{location || received}</h6>
        <p>{detail}</p>
      </div>
    </div>
  )
}

export default Resume
