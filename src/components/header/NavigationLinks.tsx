import React, { ReactElement } from "react"
import { useHeaderQuery } from "src/utils/graphql"
import styled from "styled-components"

import LinkItem from "./LinkItem"

const Container = styled.ul`
  width: 100%;
  padding: 15px 5px;

  li {
    list-style: none;
    text-align: center;
    display: block;

    &:not(:last-child) {
      margin-bottom: 1px;
    }

    a {
      text-transform: uppercase;
      font-size: 0.94rem;
      letter-spacing: 1px;
      display: block;
      padding: 5px 0;
      color: ${props => props.theme.colors.body};
      transition: ${props => props.theme.variables.transition};
      font-weight: 600;
      position: relative;
      overflow: hidden;
      z-index: 1;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 100%;
        height: 100%;
        width: 0;
        background: rgba(
          ${props => props.theme.variables.primaryLightRgba},
          0.2
        );
        visibility: hidden;
        transition: ${props => props.theme.variables.transition};
        z-index: -1;
      }

      &:hover {
        color: ${props => props.theme.colors.primary};

        &::before {
          width: 100%;
          visibility: visible;
        }
      }

      &.active {
        color: #ffffff;

        &::before {
          background: ${props => props.theme.colors.primary};
          width: 100%;
          visibility: visible;
        }
      }
    }
  }
`

const NavigationLinks = (): ReactElement => {
  const { menu } = useHeaderQuery()
  const menuItems = menu?.edges?.[0]?.node?.menuItems?.nodes

  return (
    <Container className="mi-header-menu">
      {menuItems?.map(item => (
        <LinkItem key={item?.id} text={item?.label} redirectTo={item?.path} />
      ))}
    </Container>
  )
}

export default NavigationLinks
