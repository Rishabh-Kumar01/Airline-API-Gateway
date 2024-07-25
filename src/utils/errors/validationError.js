const { StatusCodes } = require("../imports.util").responseCodes;

class ValidationError extends Error {
  constructor(error) {
    super();
    const explanation = error.errors.map((err) => err.message);
    this.name = "ValidationError";
    this.message =
      "Not able to validate the data sent in the request. Please check the request and try again.";
    this.explanation = explanation;
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = ValidationError;
