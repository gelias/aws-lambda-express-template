let express = require("express");
let router = express.Router();
let packageInfo = require("../package.json");

router.get("/status", (_, res) => {
  res.send(`<h2>${packageInfo.name} - ${packageInfo.version}</h2>`);
});

module.exports = router;
