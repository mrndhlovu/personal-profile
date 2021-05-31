import React from "react"
import { CloudinaryContext } from "cloudinary-react"

import { ThemeProvider, GlobalContextProvider } from "./src/providers"
import Layout from "./src/components/layout"

import "bootstrap/dist/css/bootstrap.min.css"

export const wrapPageElement = ({ element, props }) => (
  <CloudinaryContext cloudName={process.env.GATSBY_CLOUDINARY_CLOUD_NAME}>
    <GlobalContextProvider>
      <ThemeProvider>
        <Layout {...props}>{element}</Layout>
      </ThemeProvider>
    </GlobalContextProvider>
  </CloudinaryContext>
)

export const wrapRootElement = ({ element }) => <>{element}</>
