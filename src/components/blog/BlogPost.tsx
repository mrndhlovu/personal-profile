import React from "react"
import { Maybe } from "gatsby/gatsby-graphql"

import { ParseHtml } from "../shared"

interface Props {
  content: Maybe<string> | undefined
}

const BlogPost = ({ content }: Props) => {
  return (
    <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        {ParseHtml(content)}
        <div className="mi-blog-details-comments mt-30"></div>
      </div>
    </div>
  )
}

export default BlogPost
