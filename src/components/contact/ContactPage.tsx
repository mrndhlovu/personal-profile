import React, { useRef } from "react"
import { FormikConfig, FormikProps, FormikValues } from "formik"

import { FORM_VALIDATION } from "src/constants"
import { SectionTitle } from "../shared"
import { UIForm } from "../shared"

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
  const formRef = useRef<React.RefObject<HTMLElement>>()

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
                ref={formRef}
                submitHandler={submitHandler}
                initialState={initialState}
                validationSchema={FORM_VALIDATION.CONTACT}
                id="contact-form"
              >
                <UIForm.Input label="Enter your name" name="name" />
                <UIForm.Input name="email" label="Enter your email" />
                <UIForm.Input label="Enter your subject" name="subject" />
                <UIForm.TextArea label="Enter your Message" name="message" />

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
          {/* <div className="col-lg-6">
            <div className="mi-contact-info">
              {!emailAddress ? null : (
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <Icon.Mail />
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Email</h6>
                    {emailAddress.map(email => (
                      <p key={email}>
                        <a href={`mailto:${email}`}>{email}</a>
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ContactPage
