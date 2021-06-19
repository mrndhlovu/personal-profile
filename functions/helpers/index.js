const { default: axios } = require("axios")

const formattedReturn = (statusCode, body, options) => ({
  statusCode,
  body: JSON.stringify(body),
  ...options,
})

module.exports = {
  formattedReturn,
}
