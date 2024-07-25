const { StatusCodes } = require("../imports.util").responseCodes;

class ServiceError extends Error {
  constructor(
    message = "Something Went Wrong",
    explanation = "Service Layer Error",
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    this.name = "ServiceError";
    this.message = message;
    this.explanation = explanation;
    this.statusCode = statusCode;
  }
}

module.exports = ServiceError;
