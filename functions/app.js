const express = require("express");
const Twitter = require("twitter");

const app = express.Router();

app.get("/home", (req, resp) => {
  const client = Twitter({
    consumer_key: global.app_config.consumer_key,
    consumer_secret: global.app_config.consumer_secret,
    access_token_key: global.app_config.access_token_key,
    access_token_secret: global.app_config.access_token_secret
  });
  client.get("statuses/home_timeline.json", { count: 10 }).then(data => {
    resp.send(data);
  });
});

exports.router = process.env.DEV_USE_API_MOCK ? express.static("mock") : app;
