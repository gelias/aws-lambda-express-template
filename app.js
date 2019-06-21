const express = require("express");
const app = express();
const statusRoute = require("./routes/statusRoute");

app.use(express.json());
app.use(statusRoute);

module.exports = app;
