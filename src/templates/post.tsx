import React from "react"

import { Seo } from "src/components/shared"
import BlogPost from "src/components/blog/BlogPost"
import { Maybe, SitePageContextGroup } from "gatsby/gatsby-graphql"

type SitePageContextNode = {
  pageContext?: Maybe<SitePageContextGroup>
}

const Post = ({ pageContext }: SitePageContextNode) => {
  return (
    <>
      <Seo title={`Blog | ${pageContext?.node?.title}`} />
      <BlogPost content={pageContext?.node?.content} />
    </>
  )
}

export default Post
