import React from "react"

import { SocialIcons } from "../shared"

const CenterContent = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-12">
          <div className="mi-home-content">
            <h1>
              Hi, I am <span className="color-theme">Mduduzi</span>
            </h1>
            <p>
              I am a frontend web developer. I love Code and Tech in General.
            </p>
            <SocialIcons bordered />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CenterContent
