import React from "react"
import { GatsbyBrowser } from "gatsby"

import { GlobalContextProvider, ThemeProvider } from "../helpers/providers"
import Layout from "../components/layout"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => (
  <GlobalContextProvider>
    <ThemeProvider>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  </GlobalContextProvider>
)

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => <>{element}</>
