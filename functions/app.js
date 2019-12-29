const express = require("express");

const app = express.Router();

app.get("/", (req, resp) => {
  resp.send(JSON.stringify(global.app_config));
});

exports.router = app;
