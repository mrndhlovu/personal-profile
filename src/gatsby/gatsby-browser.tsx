import React from "react"
import { GatsbyBrowser } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"

import { GlobalContextProvider, ThemeProvider } from "../providers"
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
