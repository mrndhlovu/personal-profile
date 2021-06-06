import React, { ReactElement } from "react"
import { Maybe } from "gatsby/gatsby-graphql"

type ReviewProps = {
  name: Maybe<string> | undefined
  detail: Maybe<string> | undefined
  designation: Maybe<string> | undefined
}

const Testimonial = ({
  name,
  detail,
  designation,
}: ReviewProps): ReactElement => {
  return (
    <div className="mi-testimonial-slideritem">
      <div className="mi-testimonial">
        <div className="mi-testimonial-content">
          <p>{detail}</p>
        </div>
        <div className="mi-testimonial-author">
          <h5>{name}</h5>
          <h6>{designation}</h6>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
