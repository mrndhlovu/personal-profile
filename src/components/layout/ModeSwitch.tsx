import React from "react"

import { Sun } from "react-feather"

import { useGlobalContext } from "src/helpers/context"

const ModeSwitch = () => {
  const { lightMode, handleModeChange } = useGlobalContext()

  return (
    <div className="light-mode">
      <span className="icon">
        <Sun />
      </span>
      <button
        className={lightMode ? "light-mode-switch active" : "light-mode-switch"}
        onClick={handleModeChange}
      ></button>
    </div>
  )
}

export default ModeSwitch
