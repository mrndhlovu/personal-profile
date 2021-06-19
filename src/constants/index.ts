import * as yup from "yup"

export const NAME_VALIDATION = yup.string()

const TEXT_VALIDATION = yup.string().required("Required field").min(2)

export const EMAIL_VALIDATION = yup
  .string()
  .email("Invalid email")
  .required("Required field")

export const FORM_VALIDATION = {
  CONTACT: yup.object({
    name: NAME_VALIDATION.required("Required field"),
    email: EMAIL_VALIDATION,
    subject: TEXT_VALIDATION,
    message: TEXT_VALIDATION,
  }),
}

export enum ALERT_SEVERITY {
  SUCCESS = "success",
  INFO = "primary",
  ERROR = "danger",
}

export enum PLACEMENT_ENUMS {
  topRight = "top-right",
  topLeft = "top-left",
  bottomLeft = "bottom-left",
  bottomRight = "bottom-right",
  topCenter = "top-center",
  bottomCenter = "bottom-center",
}
