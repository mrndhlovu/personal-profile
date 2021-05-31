import React from "react"
import Particles from "react-tsparticles"

import { paramConfig, paramConfigLight } from "../../constants"
import { useGlobalContext } from "../../providers/context"
import Styles from "./Styles"
import CenterContent from "./CenterContent"

const Home = () => {
  const { lightMode } = useGlobalContext()

  return (
    <Styles className="mi-home-area mi-padding-section">
      <Particles
        className="mi-home-particle"
        id="tsparticles"
        options={lightMode ? paramConfigLight : paramConfig}
      />

      <CenterContent />
    </Styles>
  )
}

export default Home
