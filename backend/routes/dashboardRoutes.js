const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { getDashboardData } = require("../controllers/dashboardController.js");

const router = express.Router();

router.get("/", protect, getDashboardData);

router.get("/", (req, res) => {
  res.send("Dashboard route root working");
});


module.exports = router;
