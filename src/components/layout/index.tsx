import React, { useEffect } from "react"
import styled from "styled-components"
import { useGlobalContext } from "../../providers/context"

import { childrenInterface } from "../../utils/interfaces"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import BackgroundLines from "../home/BackgroundLines"
import ModeSwitch from "./ModeSwitch"

const Content = styled.main``

const Layout = ({ children }: childrenInterface) => {
  const { lightMode } = useGlobalContext()

  useEffect(() => {
    lightMode
      ? document.body.classList.add("light")
      : document.body.classList.remove("light")
  }, [lightMode])

  return (
    <Content className="mi-wrapper">
      <BackgroundLines />
      <Header />
      <ModeSwitch />
      {children}
      <Footer />
    </Content>
  )
}

export default Layout
