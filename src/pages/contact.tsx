import React from "react"

import ContactPage from "src/components/contact/ContactPage"
import { Seo } from "src/components/shared"

const contact = () => {
  return (
    <>
      <Seo
        title="Contact"
        description="Reach out, Would love to hear from you."
      />
      <ContactPage />
    </>
  )
}

export default contact
