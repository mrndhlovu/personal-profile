import React from "react"
import styled from "styled-components"

import { SocialIcons } from "../shared"

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
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-12">
          <Content className="mi-home-content">
            <h1>
              Hi, I am <span className="color-theme">Mduduzi</span>
            </h1>
            <p>
              I am a frontend web developer. I love Code and Tech in General.
            </p>
            <SocialIcons bordered />
          </Content>
        </div>
      </div>
    </div>
  )
}

export default CenterContent
