import React from "react"

interface Props {
  error?: string
  hasError: boolean
}

const FormErrorMessage = ({ error, hasError = false }: Props) => {
  return hasError ? (
    <span className="mi-form-field-error-text">{error}</span>
  ) : null
}

export default FormErrorMessage
