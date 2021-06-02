import React from "react"

import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../theme/GlobalStyles"
import { theme } from "../theme"

import { childrenInterface } from "../utils/types/interfaces"

const AppThemeProvider = ({ children }: childrenInterface) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default AppThemeProvider
