import React from "react"

import { useBlogContext } from "src/helpers/context"
import BlogCard from "./BlogCard"

const BlogList = () => {
  const { posts } = useBlogContext()

  return (
    <div className="row mt-30-reverse">
      {posts?.map(post => {
        return (
          <div className="col-lg-6 col-md-6 col-12 mt-30" key={post?.node?.id}>
            <BlogCard
              date={post?.node?.date}
              featuredImage={post?.node?.featuredImage?.node?.sourceUrl}
              id={post?.node?.slug}
              title={post?.node?.title}
            />
          </div>
        )
      })}
    </div>
  )
}

export default BlogList
