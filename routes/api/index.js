const router = require("express").Router();

// Require Google Books Search routes
const googleBookRoutes = require("./books");

router.use("/", googleBookRoutes);

module.exports = router;
