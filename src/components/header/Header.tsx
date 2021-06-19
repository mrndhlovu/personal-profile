import { useLocation } from "@reach/router"
import React, { useCallback, useEffect, useState } from "react"
import { usePrevious } from "src/helpers/hooks"
import styled from "styled-components"

import FooterCopyright from "./FooterCopyright"
import HeaderImage from "./HeaderImage"
import NavigationLinks from "./NavigationLinks"
import TogglerButton from "./TogglerButton"

type NaProps = {
  navigationVisible: boolean
}

const Container = styled.nav<NaProps>`
  position: fixed;
  left: 0;
  top: 0;

  height: 100vh;
  width: 300px;
  background: ${props => props.theme.colors.bgBody};
  border-right: 1px solid ${props => props.theme.colors.border};
  z-index: 10;
  transform: translateX(0);
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

  @media ${props => props.theme.device.laptop} {
    width: 260px;
  }

  @media ${props => props.theme.device.notebook} {
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
    transform: ${props =>
      props.navigationVisible ? "translateX(0)" : "translateX(-100%)"};
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
    transform: ${props =>
      props.navigationVisible ? "translateX(0)" : "translateX(-100%)"};

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

  const { pathname } = useLocation()
  const previousPath = usePrevious(pathname)

  const togglerNavigation = useCallback(
    () => setNavigationVisible(prev => !prev),
    []
  )

  useEffect(() => {
    if (previousPath !== pathname && navigationVisible) {
      togglerNavigation()
    }
  }, [pathname, previousPath, navigationVisible, togglerNavigation])

  return (
    <Container className="mi-header" navigationVisible={navigationVisible}>
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
