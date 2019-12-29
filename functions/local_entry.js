const express = require("express");
const app = require("./app.js");

global.app_config = require("./.app_config.json");

express()
  .use("/api", app.router)
  .listen(process.env.PORT || 5000, "0.0.0.0", function() {
    console.log(
      "app listening at http://%s:%s",
      this.address().address,
      this.address().port
    );
  });
