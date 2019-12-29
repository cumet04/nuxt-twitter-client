const functions = require("firebase-functions");
const express = require("express");
const app = require("./app.js");

global.app_config = functions.config().app_config;

exports.api = functions.https.onRequest(app.router);
