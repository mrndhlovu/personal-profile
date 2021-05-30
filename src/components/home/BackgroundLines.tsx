import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  left: 300px;
  top: 0;
  height: 100%;
  min-height: 100vh;
  width: calc(100% - 300px);
  z-index: -1;

  span {
    width: 1px;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 1px;
    min-height: 100vh;
    background: rgba(${props => props.theme.colors.border}, 0.3);

    &:nth-child(1) {
      left: 20%;
    }

    &:nth-child(2) {
      left: 40%;
    }

    &:nth-child(3) {
      left: 60%;
    }

    &:nth-child(4) {
      left: 80%;
    }
  }

  @media #{${props => props.theme.device.laptop}} {
    left: 260px;
    width: calc(100% - 260px);
  }

  @media #{${props => props.theme.device.notebook}} {
    left: 0;
    width: 100%;
  }

  @media #{${props => props.theme.device.tablet}} {
    left: 0;
    width: 100%;
  }

  @media #{${props => props.theme.device.mobileLg}} {
    left: 0;
    width: 100%;
  }
`
const BackgroundLines = () => {
  return (
    <Container>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  )
}

export default BackgroundLines
