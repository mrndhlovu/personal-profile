import React, { ReactElement } from "react"
import ProgressiveImage from "react-progressive-image"
import { Link } from "gatsby"

import { routes } from "src/utils"

interface Props {
  id: string
  featuredImage: string
  title: string
  date: string
}

const BlogCard = ({ id, featuredImage, title, date }: Props): ReactElement => {
  const [day, month] = date.split("-")

  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
        <Link to={`${routes.blogDetail}/${id}}`}>
          <ProgressiveImage
            src={featuredImage}
            placeholder="/images/blog-image-placeholder.png"
          >
            {(src: string) => <img src={src} alt={title} />}
          </ProgressiveImage>
        </Link>
        <div className="mi-blog-date">
          <span className="date">{day}</span>
          <span className="month">{month}</span>
        </div>
      </div>
      <div className="mi-blog-content">
        <h5>
          <Link to={`${routes.blogDetail}/${id}}`}>{title}</Link>
        </h5>
      </div>
    </div>
  )
}

export default BlogCard
