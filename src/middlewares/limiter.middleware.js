const { rateLimit, MemoryStore } =
  require("../utils/imports.util").expressRateLimit;

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

module.exports = limiter;
