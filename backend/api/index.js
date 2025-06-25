const app = require("../server");

module.exports = async (req, res) => {
  try {
    app(req, res);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Internal Server Error");
  }
};
