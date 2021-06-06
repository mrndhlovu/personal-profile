import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { MAIN_IMAGE, LIGHT_IMAGE } from "src/constants/images"
import { useGlobalContext } from "src/helpers/context"

const Container = styled.div`
  padding: 20px 0;
  display: block;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.colors.border};

  a {
    height: 200px;
    width: 200px;
    border-radius: 1000px;
    border: 7px solid ${props => props.theme.colors.border};
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
  }
`

const HeaderImage = () => {
  const { lightMode } = useGlobalContext()
  return (
    <Container className="mi-header-image">
      <Link to="/">
        <img src={lightMode ? LIGHT_IMAGE : MAIN_IMAGE} alt="brandimage" />
      </Link>
    </Container>
  )
}

export default HeaderImage
