import React from "react"

import { usePagesQuery } from "src/utils/graphql"
import ContactCard from "./ContactCard"

const ContactDetails = () => {
  const { contactPage } = usePagesQuery()

  const contactDetails = contactPage?.edges?.[0]?.node?.contactDetails as object

  return (
    <div className="col-lg-6">
      <div className="mi-contact-info">
        {Object.values(contactDetails)?.map((stringValue, index) => {
          const [label, detail, icon] = stringValue?.split(",")

          return (
            <ContactCard
              key={index}
              label={label}
              icon={icon.trim()}
              detail={detail}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ContactDetails
