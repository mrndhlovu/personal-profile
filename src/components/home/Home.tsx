import React, { useState } from "react"
import Particles from "react-tsparticles"

import { SocialIcons } from "../shared"
import { useGlobalContext } from "../../providers/context"
import Styles from "./Styles"

const Home = () => {
  const { lightMode } = useGlobalContext()

  const paramConfig: object = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
  }

  const paramConfigLight: object = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#000000",
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
  }

  return (
    <Styles>
      <div className="mi-home-area mi-padding-section">
        <Particles
          className="mi-home-particle"
          id="tsparticles"
          options={lightMode ? paramConfigLight : paramConfig}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I am <span className="color-theme">information.name</span>
                </h1>
                <p>information.aboutContent</p>
                <SocialIcons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default Home
