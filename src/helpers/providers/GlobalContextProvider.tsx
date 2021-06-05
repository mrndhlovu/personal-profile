import React, { useState } from "react"

import { childrenInterface } from "../../utils/types/interfaces"
import { GlobalContext } from "../context"

export type DefaultGlobalContextTypes = {
  lightMode: boolean
  handleModeChange: () => void
}

const GlobalContextProvider = ({ children }: childrenInterface) => {
  const [lightMode, setLightMode] = useState(false)

  const handleModeChange = () => setLightMode(prev => !prev)

  return (
    <GlobalContext.Provider value={{ lightMode, handleModeChange }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
