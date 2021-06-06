import React, { ReactElement, useState } from "react"
import ProgressiveImage from "react-progressive-image"
import Lightbox, { ImagesListType } from "react-spring-lightbox"
import { Maybe } from "../../../gatsby/gatsby-graphql"
import styled from "styled-components"

import { FiZoomIn } from "react-icons/fi"

type ImageProps = {
  image: any
  imageDetail?: Maybe<string> | undefined
}

const Container = styled.div`
  .large-image {
    object-fit: contain;
  }

  .mi-about-image {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 65%;
      width: 15px;
      background: ${props => props.theme.variables.primaryLightRgba};
    }

    &::after {
      content: "";
      position: absolute;
      left: auto;
      right: 0;
      top: auto;
      bottom: 0;
      height: 65%;
      width: 15px;
      background: ${props => props.theme.variables.primaryLightRgba};
    }

    .small-image {
      width: 100%;
    }

    .mi-about-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      height: 100px;
      width: 100px;
      margin-left: -50px;
      margin-top: -50px;
      color: #ffffff;
      display: inline-block;
      visibility: hidden;
      opacity: 0;
      transform: scale(0);
      transition: all 0.4s ease-out 0s;
      pointer-events: none;

      svg {
        height: 100%;
        width: 100%;
      }
    }

    &:hover .mi-about-icon {
      visibility: visible;
      opacity: 0.5;
      transform: scale(1);
    }
  }

  @media ${props => props.theme.device.mobileLg} {
    .mi-about-image {
      .mi-about-icon {
        height: 70px;
        width: 70px;
        margin-left: -35px;
        margin-top: -35px;
      }
    }
  }
`

const AboutImage = ({ image, imageDetail }: ImageProps): ReactElement => {
  const [showLargeImage, setShowLargeImage] = useState(false)

  const imageData: ImagesListType = [{ src: image, alt: imageDetail as string }]

  const handleZoomIn = () => setShowLargeImage(prev => !prev)

  return (
    <Container className="col-lg-6">
      <div className="mi-about-image">
        <ProgressiveImage src={image} placeholder={image}>
          {(src: string) => (
            <img className="small-image" onClick={handleZoomIn} src={src} />
          )}
        </ProgressiveImage>
        <span className="mi-about-image-icon">
          <FiZoomIn className="mi-about-icon " />
        </span>

        <Lightbox
          isOpen={showLargeImage}
          currentIndex={0}
          images={imageData}
          onNext={() => {}}
          onPrev={() => {}}
          onClose={handleZoomIn}
        />
      </div>
    </Container>
  )
}

export default AboutImage
