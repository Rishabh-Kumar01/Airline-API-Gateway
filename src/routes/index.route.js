const router = require("../utils/imports.util").express.Router();

const v1ApiRoutes = require("./v1/index");

router.use("/v1", v1ApiRoutes);

module.exports = router;
