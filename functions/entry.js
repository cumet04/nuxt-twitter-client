const functions = require("firebase-functions");
const app = require("./app.js");

// load config from file when functions' config is unavailable ( in emulator env)
global.app_config =
  functions.config().app_config || require("./.app_config.json");

const func_https = functions.region("asia-northeast1").https;

exports.home = func_https.onCall(app.home);
