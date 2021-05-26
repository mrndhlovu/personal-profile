import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

interface Props {
  siteTitle: string
}

const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  margin-bottom: 1.45rem;
`

const Header = ({ siteTitle }: Props) => (
  <Container>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Container>
)

export default Header
