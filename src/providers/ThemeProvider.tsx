import React from "react"

import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/GlobalStyles"
import { theme } from "../styles/theme"

import { childrenInterface } from "../utils/interfaces"

const AppThemeProvider = ({ children }: childrenInterface) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default AppThemeProvider
