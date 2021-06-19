import React, { forwardRef, ReactNode } from "react"
import { Formik, Form, FormikConfig } from "formik"

import FormInput from "./FormInput"
import FormTextArea from "./FormTextArea"

interface FormProps {
  initialState?: FormikConfig<any>["initialValues"]
  dataTestId?: string
  id?: string
  validationSchema?: object
  submitHandler: FormikConfig<any>["onSubmit"]
  validate?: () => void
  children?: ReactNode
}

type ButtonProps = {
  buttonText?: string
  onClick?: () => void
  type?: "button" | "reset" | "submit" | undefined
  formId: string
}

const UIForm = forwardRef(
  (
    {
      children,
      dataTestId,
      id,
      initialState,
      submitHandler,
      validate,
      validationSchema,
    }: FormProps,
    ref: any
  ) => {
    return (
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        innerRef={ref}
        validateOnChange
        validate={validate}
      >
        <Form
          id={id}
          className="mi-form mi-contact-form"
          data-testid={dataTestId}
        >
          {children}
        </Form>
      </Formik>
    )
  }
)

const UIFormButton = ({
  buttonText,
  formId,
  onClick,
  type = "button",
}: ButtonProps) => (
  <button form={formId} onClick={onClick} className="mi-button" type={type}>
    {buttonText}
  </button>
)

export default Object.assign(UIForm, {
  Button: UIFormButton,
  Input: FormInput,
  TextArea: FormTextArea,
})
