import React, { forwardRef, ReactNode, useCallback, useMemo } from "react"
import { useField } from "formik"

import FormErrorMessage from "./FormErrorMessage"

type RenderInput = (
  value: string,
  isChecked?: boolean,
  hasError?: boolean
) => ReactNode

const FormInput = forwardRef((props: any, ref: any) => {
  const [field, meta] = useField(props)

  const hasError = meta.touched && meta.error !== undefined

  const renderInput: RenderInput = useCallback(() => {
    switch (props?.type) {
      case "radio":
      case "checkbox":
        return (
          <div
            className={
              hasError ? "mi-form-field error-textarea" : "mi-form-field"
            }
          >
            <input
              type="checkbox"
              className={props?.className}
              ref={ref}
              {...field}
            />

            {hasError && (
              <span className="mi-form-field-error">{meta.error}</span>
            )}
          </div>
        )

      default:
        return (
          <div
            className={
              hasError ? "mi-form-field error-textarea" : "mi-form-field"
            }
          >
            <label htmlFor={`contact-form-${props?.name}`}>
              {props?.label}*
            </label>
            <input
              data-testid={props?.dataTestId || ""}
              id={`contact-form-${field?.name}`}
              placeholder={props?.placeholder}
              ref={ref}
              required={props?.required}
              {...field}
            />

            <FormErrorMessage hasError={hasError} error={meta?.error} />
          </div>
        )
    }
  }, [props, field, hasError, meta, ref])

  return (
    <>
      {useMemo(() => renderInput(field?.value, field?.checked, hasError), [
        field.value,
        field.checked,
        renderInput,
        hasError,
      ])}
    </>
  )
})

export default FormInput
