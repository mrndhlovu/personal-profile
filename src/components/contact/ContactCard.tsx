import React, { ReactElement } from "react"

import { FaGithub, FaLinkedin, FaMapMarker } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

interface Props {
  icon: string
  label: string
  detail: string
}

const ContactCard = ({ icon, label, detail }: Props): ReactElement => {
  const Icon = () => {
    switch (icon) {
      case "github":
        return <FaGithub className={`lni-${icon}`} />

      case "linkedIn":
        return <FaLinkedin className={`lni-${icon}`} />

      case "mappin":
        return <FaMapMarker className={`lni-${icon}`} />

      case "email":
        return <FiMail className={`lni-${icon}`} />

      default:
        return null
    }
  }

  return (
    <div className="mi-contact-infoblock">
      <span className="mi-contact-infoblock-icon">
        <Icon />
      </span>
      <div className="mi-contact-infoblock-content">
        <h6>{label}</h6>
        <p>
          {label === "Email" ? (
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`mailto:${detail}`}
            >
              {detail}
            </a>
          ) : label === "Location" ? (
            <span>{detail}</span>
          ) : (
            <a rel="noopener noreferrer" target="_blank" href={detail}>
              {detail}
            </a>
          )}
        </p>
      </div>
    </div>
  )
}

export default ContactCard
