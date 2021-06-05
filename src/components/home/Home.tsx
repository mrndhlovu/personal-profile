import React from "react"
import Particles from "react-tsparticles"
import styled from "styled-components"

import { getParticleOptions } from "../../utils"
import { useGlobalContext } from "src/helpers/context"
import CenterContent from "./CenterContent"

const Container = styled.div`
  ${props => props.theme.mixins.flex()};
  min-height: 100vh;
  position: relative;
  z-index: 1;

  .particles {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
`

const Home = () => {
  const { lightMode } = useGlobalContext()

  return (
    <Container className="mi-padding-section">
      <Particles
        className="particles"
        id="tsparticles"
        options={getParticleOptions(lightMode)}
      />

      <CenterContent />
    </Container>
  )
}

export default Home
