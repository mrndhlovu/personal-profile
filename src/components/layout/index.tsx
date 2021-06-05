import React, { useEffect } from "react"
import styled from "styled-components"

import { childrenInterface } from "../../utils/types/interfaces"
import { useGlobalContext } from "src/helpers/context"
import BackgroundLines from "../home/BackgroundLines"
import Header from "../header/Header"
import ModeSwitch from "./ModeSwitch"

const Content = styled.main`
  padding-left: 300px;
  position: relative;
  min-height: 100vh;
  z-index: 1;

  @media ${props => props.theme.device.laptop} {
    padding-left: 260px;
  }

  @media ${props => props.theme.device.notebook} {
    padding-left: 0;
  }

  @media ${props => props.theme.device.tablet} {
    padding-left: 0;
  }

  @media ${props => props.theme.device.mobileLg} {
    padding-left: 0;
  }
`

const Layout = ({ children }: childrenInterface) => {
  const { lightMode } = useGlobalContext()

  useEffect(() => {
    lightMode
      ? document.body.classList.add("light")
      : document.body.classList.remove("light")
  }, [lightMode])

  return (
    <Content className="mi-wrapper">
      <Header />
      <BackgroundLines />
      <ModeSwitch />
      {children}
    </Content>
  )
}

export default Layout
