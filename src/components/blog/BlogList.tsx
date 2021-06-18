import React from "react"
import { useBlogContext } from "src/helpers/context"

// import BlogCard from "./BlogCard"

const BlogList = () => {
  const { posts } = useBlogContext()

  return (
    <div className="row mt-30-reverse">
      {posts?.map(blog => (
        <div className="col-lg-6 col-md-6 col-12 mt-30" key={blog?.id}>
          {/* <BlogCard /> */}
        </div>
      ))}
    </div>
  )
}

export default BlogList
