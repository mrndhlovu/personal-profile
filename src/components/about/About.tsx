import { isEmpty } from "lodash"
import React, { ReactElement } from "react"
import { useAirtableQuery } from "src/utils/graphql"
import styled from "styled-components"

import { SectionTitle } from "../shared"
import AboutDetail from "./AboutDetail"
import Reviews from "./Reviews"
import Services from "./Services"

const Container = styled.div`
  .mi-about-content {
    h3 {
      font-weight: 600;
      margin-top: -8px;
    }

    .mi-button {
      margin-top: 15px;
    }
  }

  @media ${props => props.theme.device.tablet} {
    .mi-about-content {
      margin-top: 30px;
    }
  }

  @media ${props => props.theme.device.mobileLg} {
    .mi-about-content {
      margin-top: 30px;

      ul {
        li {
          b {
            min-width: 90px;
          }
        }
      }
    }
  }
`

const About = (): ReactElement => {
  const reviews = useAirtableQuery()?.reviews?.edges || []

  const hasReviews = !isEmpty(reviews)

  return (
    <Container className="mi-about-area mi-section mi-padding-top">
      <div className="container">
        <SectionTitle title="About Me" />
        <AboutDetail />
      </div>

      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <SectionTitle title="Services" />
          <Services />
        </div>
      </div>

      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        {hasReviews && (
          <div className="container">
            <SectionTitle title="Reviews" />
            <div className="row justify-content-center">
              <div className="col-12">
                <Reviews reviews={reviews} />
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default About
