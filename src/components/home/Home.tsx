import React from "react"
import Particles from "react-tsparticles"

import { getParticleOptions } from "../../utils"
import { useGlobalContext } from "../../providers/context"
import CenterContent from "./CenterContent"
import Styles from "./Styles"

const Home = () => {
  const { lightMode } = useGlobalContext()

  return (
    <Styles className="mi-home-area mi-padding-section">
      <Particles
        className="mi-home-particle"
        id="tsparticles"
        options={getParticleOptions(lightMode)}
      />

      <CenterContent />
    </Styles>
  )
}

export default Home
