const functions = require("firebase-functions");
const app = require("./app.js");

// load config from file when functions' config is unavailable ( in emulator env)
global.app_config =
  functions.config().app_config || require("./.app_config.json");

exports.home = functions.https.onCall(app.home);
