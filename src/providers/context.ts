import { createContext } from "react"
import { useContext } from "react"

import { DefaultGlobalContextTypes } from "./GlobalContextProvider"

const GlobalContext = createContext<DefaultGlobalContextTypes>({
  lightMode: false,
  handleModeChange: () => {},
})

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalContext }
