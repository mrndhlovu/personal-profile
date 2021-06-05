import React from "react"

import { ThemeProvider } from "styled-components"

import { childrenInterface } from "../../utils/types/interfaces"
import { GlobalStyles } from "../../theme/GlobalStyles"
import { theme } from "../../theme"

import "bootstrap/dist/css/bootstrap.min.css"

const AppThemeProvider = ({ children }: childrenInterface) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default AppThemeProvider
