import React from "react"

import { Seo } from "src/components/shared"
// import { BlogProvider } from "src/helpers/providers"

const Post = ({ pageContext }: any) => {
  return (
    <>
      <Seo title={`Blog | ${pageContext?.node.title}`} />
      {/* <BlogPost post={pageContext.node} /> */}
    </>
  )
}

export default Post
