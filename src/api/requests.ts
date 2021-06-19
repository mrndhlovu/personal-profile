import axios, { AxiosRequestConfig, AxiosPromise } from "axios"
import { ContactValues } from "src/components/contact/ContactPage"
import { endpoints } from "src/utils/url"

export const headerOptions: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
}

interface ContactRequestData extends ContactValues {
  type: string
}

export const sendEmail = (data: ContactRequestData): AxiosPromise =>
  axios.post(endpoints.sendContactEmail, data, headerOptions)
