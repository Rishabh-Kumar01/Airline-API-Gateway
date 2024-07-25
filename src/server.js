const {
  morgan,
  cors,
  helmet,
  compression,
  express,
  httpProxyMiddleware,
  expressRateLimit,
} = require("./utils/index.util").imports;
const config = require("./config/index.config");
const { limiter } = require("./middlewares/index.middleware");
const routes = require("./routes/index.route");

const app = express();

const logIPMiddleware = (req, res, next) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log(`Request from IP: ${ip}`);
  next();
};

// Apply the logging middleware
app.use(logIPMiddleware);

// Middlewares
app.use(morgan("dev"));
app.use(limiter);
app.use(cors());
app.use(helmet());
app.use(compression());

const services = [
  {
    path: config.serverConfig.AUTH_SERVICE_PATH,
    target: config.serverConfig.AUTH_SERVICE_URL,
  },
  {
    path: config.serverConfig.BOOKING_SERVICE_PATH,
    target: config.serverConfig.BOOKING_SERVICE_URL,
  },
  {
    path: config.serverConfig.REMINDER_SERVICE_PATH,
    target: config.serverConfig.REMINDER_SERVICE_URL,
  },
  {
    path: config.serverConfig.FLIGHT_AND_SEARCH_SERVICE_PATH,
    target: config.serverConfig.FLIGHT_AND_SEARCH_SERVICE_URL,
  },
];

// Setup proxy middleware
services.forEach(({ path, target }) => {
  app.use(
    path,
    httpProxyMiddleware.createProxyMiddleware({
      target: target,
      changeOrigin: true,
      onProxyReq: httpProxyMiddleware.fixRequestBody,
    })
  );
});

// Home Route
app.get("/", (req, res) => {
  res.send("API Gateway is running");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
const PORT = config.serverConfig.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});

module.exports = app;
