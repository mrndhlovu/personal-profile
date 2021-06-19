require("dotenv").config()

const { formattedReturn } = require("./helpers")

const handler = async event => {
  try {
    switch (event?.type) {
      case "contact-email":
        return formattedReturn(200, {})

      default:
        throw new Error(`Method not found`)
    }
  } catch (error) {
    return formattedReturn(400, error.message)
  }
}

module.exports = { handler }
