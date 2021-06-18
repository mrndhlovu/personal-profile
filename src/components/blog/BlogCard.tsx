import React, { ReactElement } from "react"
import ProgressiveImage from "react-progressive-image"
import { Link } from "gatsby"
import { Maybe } from "gatsby/gatsby-graphql"

import { routes } from "src/utils"

interface Props {
  id?: Maybe<string> | undefined
  featuredImage?: Maybe<string> | undefined
  title?: Maybe<string> | undefined
  date?: Maybe<string> | undefined
}

const BlogCard = ({ id, featuredImage, title, date }: Props): ReactElement => {
  const [day, month]: any = date?.split(",")
  const image = featuredImage as string
  const slugId = id as string

  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
        <Link to={`${routes.blogDetail}/${id}}`}>
          <ProgressiveImage
            src={image}
            placeholder="/images/blog-image-placeholder.png"
          >
            {(src: string) => <img src={src} alt={slugId} />}
          </ProgressiveImage>
        </Link>
        <div className="mi-blog-date">
          {day?.split(" ")?.map((dateString: string) => (
            <span className="date">{dateString}</span>
          ))}
          <br />
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
