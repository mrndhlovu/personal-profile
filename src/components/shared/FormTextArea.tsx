import React from "react"
import { useField } from "formik"

import FormErrorMessage from "./FormErrorMessage"

const FormTextArea = (props: any) => {
  const [field, meta] = useField(props)
  const hasError = meta?.touched && meta?.error !== undefined

  return (
    <div
      className={hasError ? "mi-form-field error-textarea" : "mi-form-field"}
    >
      <label htmlFor={`contact-form-${field?.name}`}>{props?.label}*</label>
      <textarea
        data-testid={props?.dataTestId}
        required={props?.required}
        id={`contact-form-${field?.name}`}
        cols={30}
        rows={6}
        {...field}
      />

      <FormErrorMessage hasError={hasError} error={meta?.error} />
    </div>
  )
}

export default FormTextArea
