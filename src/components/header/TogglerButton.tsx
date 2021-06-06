import React from "react"
import styled from "styled-components"

import { FiMenu, FiX } from "react-icons/fi"

interface Props {
  togglerNavigation: () => void
  navigationVisible: boolean
}

const Button = styled.button`
  position: absolute;
  left: 100%;
  top: 20px;
  padding: 0;
  height: ${props => props.theme.variables.inputButtonHeight};
  width: 50px;
  text-align: center;
  font-size: 1.6rem;
  background: lighten(${props => props.theme.colors.bgBody}, 5);
  ${props => props.theme.mixins.flex()};
  display: none;

  &:focus {
    border-color: ${props => props.theme.colors.border};
  }
`

const TogglerButton: React.FC<Props> = ({
  togglerNavigation,
  navigationVisible,
}) => {
  return (
    <Button onClick={togglerNavigation} className="mi-header-toggler">
      {!navigationVisible ? <FiMenu /> : <FiX />}
    </Button>
  )
}

export default TogglerButton
