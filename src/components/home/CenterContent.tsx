import React from "react"
import styled from "styled-components"

import { usePagesQuery } from "src/utils/graphql"
import { SocialIcons } from "../shared"
import TypeWriter from "./TypeWriter"

const Content = styled.div`
  text-align: center;
  padding: 50px 80px;

  h1 {
    font-weight: 700;
  }

  p {
    margin-top: 15px;
    font-size: 1.25rem;
    line-height: 2rem;
  }

  .experience {
    min-width: 200px;
    position: relative;
    text-decoration: underline;
    color: ${props => props.theme.colors.whatsapp};

    .blinker {
      position: absolute;
      right: -5px;
      margin: 0 4px;
      top: -4px;
      color: ${props => props.theme.colors.whatsapp};
    }
  }

  @media ${props => props.theme.device.laptop} {
    padding: 50px 0px;
  }

  @media ${props => props.theme.device.notebook} {
    padding: 50px 0px;
  }

  @media ${props => props.theme.device.tablet} {
    padding: 50px 0px;

    p {
      font-size: 1.15rem;
      line-height: 1.75rem;
    }
  }

  @media ${props => props.theme.device.mobileLg} {
    padding: 50px 0px;

    p {
      font-size: 1.08rem;
      line-height: 1.55rem;
    }
  }

  @media ${props => props.theme.device.mobileSm} {
    h1 {
      span {
        display: block;
      }
    }
  }
`

const CenterContent = () => {
  const heading = usePagesQuery()?.homePage?.edges?.[0]?.node?.mainHeading?.text

  const [intro, name, whois, experience, location]: any = heading?.split("-")

  const experienceOptions = experience.split("|")

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-12">
          <Content className="mi-home-content">
            <h1>
              {`${intro} `}
              <span className="color-theme">{name}</span>
            </h1>

            <p>
              {whois}
              <TypeWriter options={experienceOptions} />
              {location}
            </p>
            <SocialIcons bordered />
          </Content>
        </div>
      </div>
    </div>
  )
}

export default CenterContent
