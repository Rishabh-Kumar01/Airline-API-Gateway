# Welcome to Airline API Gateway

## GitHub repository links for the four services in this microservice architecture:

- Auth Service -
  [GitHub Repository Link](https://github.com/Rishabh-Kumar01/Auth-Service)
- Flight and Search Service -
  [GitHub Repository Link](https://github.com/Rishabh-Kumar01/FlightsAndSerachService)
- Reminder Service -
  [GitHub Repository Link](https://github.com/Rishabh-Kumar01/Reminder-Service)
- Booking Service -
  [GitHub Repository Link](https://github.com/Rishabh-Kumar01/BookingService)

## Project Setup

- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the
  downlaoded project
- Create a `.env` file in the root directory and add the following environment
  variable

```
PORT=8004
AUTH_SERVICE_URL="http://localhost:8001"
FLIGHT_AND_SEARCH_SERVICE_URL="http://localhost:8000"
REMINDER_SERVICE_URL="http://localhost:8003"
BOOKING_SERVICE_URL="http://localhost:8002"
AUTH_SERVICE_PATH="/authservice"
FLIGHT_AND_SEARCH_SERVICE_PATH="/flightandsearchservice"
REMINDER_SERVICE_PATH="/reminderservice"
BOOKING_SERVICE_PATH="/bookingservice"
```

## Features

### HTTP Proxy Middleware

- The API Gateway uses the `http-proxy-middleware` library to create a reverse
  proxy. This allows the gateway to forward incoming requests to various
  microservices based on the request path.
- Configured paths and their corresponding target URLs are:
  - Auth Service: `${AUTH_SERVICE_PATH}` -> `${AUTH_SERVICE_URL}`
  - Booking Service: `${BOOKING_SERVICE_PATH}` -> `${BOOKING_SERVICE_URL}`
  - Reminder Service: `${REMINDER_SERVICE_PATH}` -> `${REMINDER_SERVICE_URL}`
  - Flight and Search Service: `${FLIGHT_AND_SEARCH_SERVICE_PATH}` ->
    `${FLIGHT_AND_SEARCH_SERVICE_URL}`

### Rate Limiting

- The API Gateway implements rate limiting using the `express-rate-limit`
  library to prevent abuse and ensure fair usage of resources.
- The rate limiter is configured to allow a maximum of 5 requests per minute
  from a single IP address. Exceeding this limit will result in a
  `429 Too Many Requests` response with a message indicating to try again after
  15 minutes.

### Additional Features

- **IP Logging:** The gateway logs the IP address of each incoming request for
  monitoring and security purposes.
- **Compression:** Using `compression` middleware to gzip compress responses for
  improved performance.
- **Request Logging:** Using `morgan` to log HTTP requests for debugging and
  monitoring.

## Running the API Gateway

- Start the API Gateway using the following command `npm start`
