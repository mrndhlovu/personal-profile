import React, { useState } from "react"
import styled from "styled-components"

import FooterCopyright from "./FooterCopyright"
import HeaderImage from "./HeaderImage"
import NavigationLinks from "./NavigationLinks"
import TogglerButton from "./TogglerButton"

const Container = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(0);
  height: 100vh;
  width: 300px;
  background: lighten(${props => props.theme.colors.bgBody}, 5);
  border-right: 1px solid ${props => props.theme.colors.border};
  z-index: 10;
  transition: ${props => props.theme.variables.transition};

  .mi-header-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    overflow-y: auto;
  }

  .mi-header-is-visible {
    transform: translateX(0);
  }

  @media ${props => props.theme.device.laptop} {
    width: 260px;
  }

  @media ${props => props.theme.device.notebook} {
    width: 260px;
    transform: translateX(-100%);

    .mi-header-toggler {
      display: flex;
    }

    .mi-header-image {
      a {
        height: 150px;
        width: 150px;
      }
    }

    .mi-header-menu {
      li {
        a {
          padding: 7px 0;
        }
      }
    }
  }

  @media ${props => props.theme.device.tablet} {
    width: 250px;
    transform: translateX(-100%);

    .mi-header-toggler {
      display: flex;
    }

    .mi-header-image {
      a {
        height: 150px;
        width: 150px;
      }
    }

    .mi-header-menu {
      li {
        a {
          padding: 7px 0;
        }
      }
    }
  }

  @media ${props => props.theme.device.mobileLg} {
    width: 250px;
    transform: translateX(-100%);

    .mi-header-toggler {
      display: flex;
    }

    .mi-header-image {
      a {
        height: 150px;
        width: 150px;
      }
    }

    .mi-header-menu {
      li {
        a {
          padding: 7px 0;
        }
      }
    }
  }
`

const Header: React.FC = () => {
  const [navigationVisible, setNavigationVisible] = useState(false)

  const togglerNavigation = () => setNavigationVisible(prev => !prev)

  return (
    <Container
      className={navigationVisible ? "mi-header is-visible" : "mi-header"}
    >
      <TogglerButton
        togglerNavigation={togglerNavigation}
        navigationVisible={navigationVisible}
      />
      <div className="mi-header-inner">
        <HeaderImage />
        <NavigationLinks />
        <FooterCopyright />
      </div>
    </Container>
  )
}

export default Header
