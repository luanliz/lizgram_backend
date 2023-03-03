const express = require("express");
const router = express.Router();
const { healthCheck } = require("../controllers/HealthCheckController")

router.get("/", healthCheck)

module.exports = router