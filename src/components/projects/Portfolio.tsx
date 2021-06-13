import React, { ReactElement, useState } from "react"
import ProgressiveImage from "react-progressive-image"
import Lightbox, { ImagesListType } from "react-spring-lightbox"
import { AirtableData, Maybe } from "gatsby/gatsby-graphql"

import { FiZoomIn, FiLink, FiGithub } from "react-icons/fi"

interface Props {
  title: Maybe<string> | undefined
  largeImg: Maybe<string> | undefined
  smallImg: Maybe<string> | undefined
  gitHubUrl?: Maybe<string> | undefined
  liveUrl?: Maybe<string> | undefined
  skills:
    | Maybe<Maybe<{ data?: Maybe<Pick<AirtableData, "Name">> | undefined }>[]>
    | undefined
}

const Portfolio = ({
  title,
  largeImg,
  smallImg,
  gitHubUrl,
  liveUrl,
  skills,
}: Props): ReactElement => {
  const [showLargeImage, setShowLargeImage] = useState(false)

  const imageData: ImagesListType = [
    { src: largeImg as string, alt: "" as string },
  ]

  const handleZoomIn = () => setShowLargeImage(prev => !prev)

  return (
    <div className="mi-portfolio mi-portfolio-visible">
      <div className="mi-portfolio-image">
        <ProgressiveImage
          src={smallImg as string}
          placeholder="/images/portfolio-image-placeholder.png"
        >
          {(src: string) => <img src={src} alt={title as string} />}
        </ProgressiveImage>
        <ul>
          <li>
            <button onClick={handleZoomIn}>
              <FiZoomIn />
            </button>
          </li>

          {gitHubUrl && (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={gitHubUrl}>
                <FiGithub />
              </a>
            </li>
          )}

          {liveUrl && (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={liveUrl}>
                <FiLink />
              </a>
            </li>
          )}
        </ul>
      </div>
      {!liveUrl ? (
        <h5>{title}</h5>
      ) : (
        <h5>
          <a rel="noopener noreferrer" target="_blank" href={liveUrl}>
            {title}
          </a>
        </h5>
      )}

      <div>
        {skills?.map((skill, index) => (
          <code className="mi-skill-badge" key={index}>
            {skill?.data?.Name} {index + 1 !== skills.length && " | "}
          </code>
        ))}
      </div>
      <Lightbox
        isOpen={showLargeImage}
        currentIndex={0}
        images={imageData}
        onNext={() => {}}
        onPrev={() => {}}
        onClose={handleZoomIn}
      />
    </div>
  )
}

export default Portfolio
