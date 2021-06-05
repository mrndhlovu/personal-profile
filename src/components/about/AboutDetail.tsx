import React from "react"
import { WpPage_Aboutdetail_Data, Maybe } from "gatsby/gatsby-graphql"

import { usePagesQuery } from "src/utils/graphql"
import { ParseHtml } from "../shared"

import AboutImage from "./AboutImage"
import DownloadButton from "./DownloadButton"

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

  return (
    <div className="row">
      <AboutImage
        image={aboutPage?.edges?.[0]?.node.featuredImage?.node?.sourceUrl}
        imageDetail={aboutPage?.edges?.[0]?.node.featuredImage?.node?.altText}
      />
      <div className="col-lg-6">
        <div className="mi-about-content">
          {ParseHtml(aboutPage.edges?.[0].node.content)}
          <ul>
            {data?.name && (
              <li>
                <b>Full Name</b> {data.name}
              </li>
            )}

            {process.env.GATSBY_DEFAULT_EMAIL && (
              <li>
                <b>Email</b> {process.env.GATSBY_DEFAULT_EMAIL}
              </li>
            )}
            {data?.location && (
              <li>
                <b>Location</b> {data.location}
              </li>
            )}
            {data?.freelance && (
              <li>
                <b>Freelance</b>
                {data?.freelance ? "Available" : "Not Available"}
              </li>
            )}
          </ul>
          {data?.resumeUrl && (
            <DownloadButton downloadSource={data?.resumeUrl} />
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutDetail
