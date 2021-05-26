import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import { ThemeProvider } from "../providers"
import { childrenInterface } from "../utils/interfaces"

const Content = styled.div``

const Layout = ({ children }: childrenInterface) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Content>
        <main>{children}</main>
      </Content>
    </ThemeProvider>
  )
}

export default Layout
