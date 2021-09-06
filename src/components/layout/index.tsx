import React, { useEffect } from "react"
import { isEmpty } from "lodash"

import { childrenInterface } from "../../utils/types/interfaces"
import { Notifications } from "../shared"
import { useGlobalContext } from "src/helpers/context"
import Header from "../header/Header"
import ModeSwitch from "./ModeSwitch"

const Layout = ({ children }: childrenInterface) => {
  const { lightMode, notifications } = useGlobalContext()

  const hasNotification = !isEmpty(notifications?.list)

  useEffect(() => {
    lightMode
      ? document.body.classList.add("light")
      : document.body.classList.remove("light")
  }, [lightMode])

  return (
    <div className="mi-wrapper">
      {hasNotification && <Notifications />}
      <Header />
      <ModeSwitch />
      {children}
    </div>
  )
}

export default Layout
