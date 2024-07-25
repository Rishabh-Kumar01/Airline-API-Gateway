module.exports = {
  morgan: require("morgan"),
  helmet: require("helmet"),
  cors: require("cors"),
  express: require("express"),
  compression: require("compression"),
  expressValidator: require("express-validator"),
  dotenv: require("dotenv"),
  bodyParser: require("body-parser"),
  responseCodes: require("http-status-codes"),
  httpProxyMiddleware: require("http-proxy-middleware"),
  expressRateLimit: require("express-rate-limit"),
};
