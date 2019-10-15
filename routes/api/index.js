const router = require("express").Router();
const googleBookRoutes = require("./books");

// Book routes
router.use("/books", googleBookRoutes);

module.exports = router;
