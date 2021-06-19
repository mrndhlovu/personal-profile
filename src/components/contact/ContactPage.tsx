import React, { useEffect, useRef, useState } from "react"
import { FormikConfig } from "formik"

import { FORM_VALIDATION } from "src/constants"
import { SectionTitle } from "../shared"
import { sendEmail } from "src/api/requests"
import { UIForm } from "../shared"
import { useGlobalContext } from "src/helpers/context"
import ContactDetails from "./ContactDetails"

export type ContactValues = {
  name: string
  email: string
  subject: string
  message: string
}

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export type FormRef = FormikConfig<ContactValues>

const ContactPage = () => {
  const { notify } = useGlobalContext()

  const [emailSent, setEmailSent] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [buttonText, setButtonText] = useState<string>("Send Mail")
  const formRef = useRef<any>()

  const submitHandler: FormRef["onSubmit"] = async data => {
    setSubmitting(prev => !prev)
    setButtonText("Submitting...")

    await sendEmail({ ...data, type: "contact" })
      .then(res => {
        setEmailSent(prev => !prev)
        setSubmitting(prev => !prev)
        formRef?.current?.handleReset()
        notify(res?.data?.message, undefined, "top-center")
        setButtonText("Submitted")
      })
      .catch(err => {
        setSubmitting(prev => !prev)
        setButtonText("Send Mail")

        notify(err, "danger")
      })
  }

  useEffect(() => {
    return () => {
      setButtonText("Send Mail")
    }
  }, [])

  return (
    <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        <SectionTitle title="Contact Me" />
        <div className="row">
          <div className="col-lg-6">
            <div className="mi-contact-formwrapper">
              <h4>
                {emailSent ? "Thank you for reaching out." : "Get In Touch"}
              </h4>
              <UIForm
                submitHandler={submitHandler}
                initialState={initialState}
                validationSchema={FORM_VALIDATION.CONTACT}
                id="contact-form"
                ref={formRef}
              >
                <UIForm.Input
                  required
                  type="text"
                  label="Enter your name"
                  name="name"
                />
                <UIForm.Input
                  required
                  type="text"
                  name="email"
                  label="Enter your email"
                />
                <UIForm.Input
                  type="text"
                  label="Enter your subject"
                  name="subject"
                  required
                />
                <UIForm.TextArea
                  required
                  label="Enter your Message"
                  name="message"
                />

                <div className="mi-form-field">
                  <UIForm.Button
                    formId="contact-form"
                    buttonText={buttonText}
                    type="submit"
                    disabled={submitting || emailSent}
                  />
                </div>
              </UIForm>
            </div>
          </div>

          <ContactDetails />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
