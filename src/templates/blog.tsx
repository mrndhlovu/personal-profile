import React from "react"
import { SitePageContext } from "gatsby/gatsby-graphql"

import { BlogProvider } from "src/helpers/providers"
import BlogPage from "src/components/blog/BlogPage"

export interface PaginationProps {
  pageContext: SitePageContext
}

const Blog = ({ pageContext }: PaginationProps) => {
  return (
    <BlogProvider
      paginatedPosts={pageContext?.group}
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
