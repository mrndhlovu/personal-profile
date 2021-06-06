import React, { useEffect } from "react"

import { childrenInterface } from "../../utils/types/interfaces"
import { useGlobalContext } from "src/helpers/context"
import BackgroundLines from "../home/BackgroundLines"
import Header from "../header/Header"
import ModeSwitch from "./ModeSwitch"

const Layout = ({ children }: childrenInterface) => {
  const { lightMode } = useGlobalContext()

  useEffect(() => {
    lightMode
      ? document.body.classList.add("light")
      : document.body.classList.remove("light")
  }, [lightMode])

  return (
    <div className="mi-wrapper">
      <Header />
      <BackgroundLines />
      <ModeSwitch />
      {children}
    </div>
  )
}

export default Layout
