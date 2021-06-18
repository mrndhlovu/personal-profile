import React, { ReactElement } from "react"
import { SectionTitle } from "../shared"
import BlogList from "./BlogList"

const BlogPage = (): ReactElement => {
  return (
    <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        <SectionTitle title="Recent Blogs" />
        <BlogList />
        {/* {!(posts.length > postsPerPage) ? null : (
          <Pagination
            className="mt-50"
            itemsPerPage={postsPerPage}
            totalItems={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )} */}
      </div>
    </div>
  )
}

export default BlogPage
