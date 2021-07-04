require("dotenv").config()
const { default: axios } = require("axios")
const sg = require("sendgrid")(process.env.SEND_GRID_API_KEY)

const { formattedReturn } = require("./helpers")

const handler = async event => {
  const paramMethods = ["PATCH", "POST"]

  const { email, name, subject, message, type } = paramMethods.includes(
    event.httpMethod
  )
    ? JSON.parse(event?.body)
    : event.queryStringParameters

  try {
    switch (type) {
      case "contact":
        const request = sg.emptyRequest({
          method: "POST",
          path: "/v3/mail/send",
          body: {
            personalizations: [
              {
                to: [
                  {
                    email: process.env.GATSBY_DEFAULT_EMAIL,
                  },
                ],
                subject: `Website Contact: ${name} - ${subject}`,
              },
            ],
            from: {
              email,
              name,
            },
            content: [
              {
                type: "text/plain",
                value: message,
              },
            ],
          },
        })

        const response = await sg
          .API(request)
          .then(response => {
            return { message: "Email Sent", status: response?.statusCode }
          })
          .catch(error => {
            return {
              message: "Failed to send the email.",
              status: error.response.statusCode,
            }
          })

        if (response?.status !== 202)
          return formattedReturn(response?.status, response?.message)

        return formattedReturn(response?.status, { message: "Email Sent" })

      default:
        throw new Error(`Method not found`)
    }
  } catch (error) {
    return formattedReturn(400, error.message)
  }
}

module.exports = { handler }
