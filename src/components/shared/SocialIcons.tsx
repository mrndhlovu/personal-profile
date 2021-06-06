import React from "react"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import styled, { css } from "styled-components"

interface linkProps {
  redirectTo: string
  iconName: string
}

interface props {
  bordered: boolean
}

type IconProps = {
  bordered: boolean
}

const Container = styled.ul<IconProps>`
  margin-top: 20px;
  padding-left: 0;
  margin-bottom: 0;

  li {
    list-style: none;
    display: inline-block;
    margin: 0 8px;

    a {
      display: inline-block;
      transition: ${props => props.theme.variables.transition};
      color: ${props => props.theme.colors.border};
      font-size: 1.5rem;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  ${props =>
    props.bordered &&
    css`
      li {
        a {
          height: 45px;
          width: 45px;
          line-height: 1;
          text-align: center;
          border: 2px solid ${props => props.theme.colors.border};
          border-radius: 100px;
          line-height: 45px;
          font-size: 1.3rem;

          svg {
            max-height: 100%;
          }

          &:hover {
            border-color: ${props => props.theme.colors.primary};
          }
        }
      }
    `};

  @media ${props => props.theme.device.tablet} {
    ${props =>
      props.bordered &&
      css`
        li {
          a {
            height: 42px;
            width: 42px;
            line-height: 42px;
            font-size: 1.1rem;
          }
        }
      `};
  }

  @media ${props => props.theme.device.mobileLg} {
    li {
      a {
        font-size: 1.25rem;
      }
    }

    ${props =>
      props.bordered &&
      css`
        li {
          a {
            height: 38px;
            width: 38px;
            line-height: 38px;
            font-size: 1rem;
          }
        }
      `};
  }
`

const SocialIcons = ({ bordered }: props) => {
  return (
    <Container bordered={bordered}>
      <SocialIcons.Item redirectTo="github.com" iconName="github" />
      <SocialIcons.Item redirectTo="linkedin.com" iconName="linkedin" />
    </Container>
  )
}

SocialIcons.Item = ({ redirectTo, iconName }: linkProps) => {
  const Icon = () => {
    switch (iconName) {
      case "github":
        return <FiGithub className={`lni-${iconName}`} />
      case "linkedin":
        return <FiLinkedin className={`lni-${iconName}`} />
      default:
        return null
    }
  }

  return (
    <li>
      <a rel="noopener noreferrer" target="_blank" href={redirectTo}>
        <Icon />
      </a>
    </li>
  )
}

export default SocialIcons
