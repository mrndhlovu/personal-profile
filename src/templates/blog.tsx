import React from "react"

import { BlogProvider } from "src/helpers/providers"
import BlogPage from "src/components/blog/BlogPage"

const Blog = ({ pageContext }) => {
  return (
    <BlogProvider
      paginatedPosts={pageContext?.group?.filter(
        key => key.node.slug !== "placeholder"
      )}
      posts={[]}
      paginationProps={{
        isFirst: pageContext?.first,
        isLast: pageContext?.last,
        pageCount: pageContext?.pageCount,
        currentPage: pageContext?.index,
      }}
    >
      <BlogPage />
    </BlogProvider>
  )
}

export default Blog
