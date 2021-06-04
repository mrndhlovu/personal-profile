import React from "react"
import styled from "styled-components"

import { useHeaderQuery } from "src/utils/graphql"

const Container = styled.p`
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 15px 0;
  border-top: 1px solid ${props => props.theme.colors.border};

  a {
    color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.variables.transition};

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`

const FooterCopyright = () => {
  const { user } = useHeaderQuery()

  return (
    <Container className="mi-header-copyright">
      &copy; {new Date().getFullYear()}{" "}
      <b>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={process.env.GATSBY_FRONTEND_URL}
        >
          {`${user?.firstName} ${user?.lastName}`}
        </a>
      </b>
    </Container>
  )
}

export default FooterCopyright
