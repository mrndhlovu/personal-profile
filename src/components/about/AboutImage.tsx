import React, { ReactElement } from "react"
import ProgressiveImage from "react-progressive-image"
import FsLightbox from "fslightbox-react"
import { Maybe } from "../../../gatsby/gatsby-graphql"

import { FiZoomIn } from "react-icons/fi"

type ImageProps = {
  image: any
  imageDetail: Maybe<string> | undefined
}

const AboutImage = ({ image, imageDetail }: ImageProps): ReactElement => {
  const handleZoomIn = () => {}

  return (
    <div className="col-lg-6">
      <div className="mi-about-image">
        <ProgressiveImage src={image} placeholder={image}>
          {(src: string) => <img onClick={handleZoomIn} src={src} />}
        </ProgressiveImage>
        <span className="mi-about-image-icon">
          <FiZoomIn />
        </span>
        <FsLightbox toggler={false} sources={[imageDetail || ""]} />
      </div>
    </div>
  )
}

export default AboutImage
