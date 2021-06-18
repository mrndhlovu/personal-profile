import React, { forwardRef, ReactNode } from "react"

import { Formik, Form, FormikValues, FormikConfig } from "formik"

interface FormProps {
  initialState?: FormikConfig<any>["initialValues"]
  dataTestId?: string
  id?: string
  validationSchema?: object
  submitHandler: FormikConfig<any>["onSubmit"]
  validate?: () => void
  children?: ReactNode
}

type InputProps = {
  label?: string
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
  name?: string
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
  type = "button",
  onClick,
  formId,
}: ButtonProps) => (
  <button form={formId} onClick={onClick} className="mi-button" type={type}>
    {buttonText}
  </button>
)

const UIFormInput = ({ label, type = "text", name }: InputProps) => (
  <div className="mi-form-field">
    <label htmlFor={`contact-form-${name}`}>{label}*</label>
    <input type={type} name={name} id={`contact-form-${name}`} />
  </div>
)

const UIFormTextArea = ({ label, name }: InputProps) => (
  <div className="mi-form-field">
    <label htmlFor={`contact-form-${name}`}>{label}*</label>
    <textarea name={name} id={`contact-form-${name}`} cols={30} rows={6} />
  </div>
)

export default Object.assign(UIForm, {
  Button: UIFormButton,
  Input: UIFormInput,
  TextArea: UIFormTextArea,
})
