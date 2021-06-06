import React from "react"
import { WpPage_Aboutdetail_Data, Maybe } from "gatsby/gatsby-graphql"

import { usePagesQuery } from "src/utils/graphql"
import { ParseHtml } from "../shared"
import AboutImage from "./AboutImage"
import DownloadButton from "./DownloadButton"
import AboutContent from "./AboutContent"

type dataValues =
  | Maybe<
      Pick<
        WpPage_Aboutdetail_Data,
        "freelance" | "location" | "name" | "skills" | "resumeUrl"
      >
    >
  | undefined

const AboutDetail = () => {
  const { aboutPage } = usePagesQuery()
  const data: dataValues = aboutPage.edges?.[0]?.node?.aboutDetail?.data
  const imageData = aboutPage?.edges?.[0]?.node.featuredImage?.node

  return (
    <div className="row">
      <AboutImage
        imageSm={imageData?.localFile?.small?.fluid?.srcWebp}
        imageLg={imageData?.localFile?.large?.fluid?.srcWebp}
        imageDetail={imageData?.altText}
      />
      <div className="col-lg-6">
        <div className="mi-about-content">
          {ParseHtml(aboutPage.edges?.[0].node.content)}
          <AboutContent data={data} />
          {data?.resumeUrl && (
            <DownloadButton downloadSource={data?.resumeUrl} />
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutDetail
