import React, { useRef } from "react"
import { FormikConfig } from "formik"

import { FORM_VALIDATION } from "src/constants"
import { SectionTitle } from "../shared"
import { UIForm } from "../shared"
import ContactDetails from "./ContactDetails"

type InputValues = {
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

export type FormRef = FormikConfig<InputValues>

const ContactPage = () => {
  const submitHandler: FormRef["onSubmit"] = data => {
    console.log(
      "🚀 ~ file: ContactPage.tsx ~ line 18 ~ submitHandler ~ data",
      data
    )
  }

  return (
    <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        <SectionTitle title="Contact Me" />
        <div className="row">
          <div className="col-lg-6">
            <div className="mi-contact-formwrapper">
              <h4>Get In Touch</h4>
              <UIForm
                submitHandler={submitHandler}
                initialState={initialState}
                validationSchema={FORM_VALIDATION.CONTACT}
                id="contact-form"
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
                    buttonText="Send Mail"
                    type="submit"
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
