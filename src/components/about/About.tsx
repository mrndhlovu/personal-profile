import React from "react"
import styled from "styled-components"

import { SectionTitle } from "../shared"
import AboutDetail from "./AboutDetail"

const Container = styled.div`
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

    img {
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
    .mi-about-image {
      .mi-about-icon {
        height: 70px;
        width: 70px;
        margin-left: -35px;
        margin-top: -35px;
      }
    }
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

const About = () => {
  return (
    <>
      <Container className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <SectionTitle title="About Me" />
          <AboutDetail />
        </div>
      </Container>
      {/* <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Services" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map(service => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Reviews" />
          <div className="row justify-content-center">
            <div className="col-12">
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map(review => (
                  <Testimonial key={review.id} content={review} />
                ))}
              </Slider>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </>
  )
}

export default About
