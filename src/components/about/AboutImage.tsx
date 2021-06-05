import React from "react"
import ProgressiveImage, {
  ProgressiveImageProps,
} from "react-progressive-image"
import FsLightbox from "fslightbox-react"
import { Maybe, ImageSharpFluid } from "../../../gatsby/gatsby-graphql"

import { ZoomIn } from "react-feather"

type ImageProps = {
  image: any
  imageDetail: Maybe<string> | undefined
}

const AboutImage = ({ image, imageDetail }: ImageProps): JSX.Element => {
  const handleZoomIn = () => {}

  return (
    <div className="col-lg-6">
      <div className="mi-about-image">
        <ProgressiveImage
          src={image}
          placeholder="/images/about-image-placeholder.png"
        >
          {(src: string) => <img onClick={handleZoomIn} src={src} />}
        </ProgressiveImage>
        <span className="mi-about-image-icon">
          <ZoomIn />
        </span>
        <FsLightbox toggler={false} sources={[imageDetail || ""]} />
      </div>
    </div>
  )
}

export default AboutImage
