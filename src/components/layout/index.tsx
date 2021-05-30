import React from "react"
import styled from "styled-components"

import { childrenInterface } from "../../utils/interfaces"
import Footer from "../footer/Footer"
import Header from "../header/header"
import BackgroundLines from "../home/BackgroundLines"
import ModeSwitch from "./ModeSwitch"

const Content = styled.main`
  padding-left: 300px;
  position: relative;
  min-height: 100vh;
  z-index: 1;

  @media #{${props => props.theme.device.laptop}} {
    padding-left: 260px;
  }

  @media #{${props => props.theme.device.notebook}} {
    padding-left: 0;
  }

  @media #{${props => props.theme.device.tablet}} {
    padding-left: 0;
  }

  @media #{${props => props.theme.device.mobileLg}} {
    padding-left: 0;
  }
`

const Layout = ({ children }: childrenInterface) => {
  return (
    <Content>
      <BackgroundLines />
      <Header />
      <ModeSwitch />
      {children}
      <Footer />
    </Content>
  )
}

export default Layout
