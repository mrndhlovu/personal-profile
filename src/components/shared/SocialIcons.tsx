import React from "react"
import { GitHub, Linkedin } from "react-feather"

interface linkProps {
  redirectTo: string
  iconName: string
}

interface props {
  bordered: boolean
}

const SocialIcons = ({ bordered }: props) => {
  return (
    <ul
      className={
        bordered ? "mi-socialicons mi-socialicons-bordered" : "mi-socialicons"
      }
    >
      <SocialIcons.Item redirectTo="github.com" iconName="github" />
      <SocialIcons.Item redirectTo="linkedin.com" iconName="linkedin" />
    </ul>
  )
}

SocialIcons.Item = ({ redirectTo, iconName }: linkProps) => {
  const Icon = () => {
    switch (iconName) {
      case "github":
        return <GitHub />
      case "linkedin":
        return <Linkedin />
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
