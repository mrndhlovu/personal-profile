import React from "react"

import { Seo } from "../components/shared"
import Home from "../components/home/Home"

const IndexPage = () => (
  <>
    <Seo title="Home" description="Personal Portfolio" />
    <Home />
  </>
)

export default IndexPage
