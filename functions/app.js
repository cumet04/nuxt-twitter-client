const Twitter = require("twitter");

exports.home = function(data, context) {
  if (process.env.DEV_USE_API_MOCK) {
    return require("./mock/home.json");
  }
  const client = Twitter({
    consumer_key: global.app_config.consumer_key,
    consumer_secret: global.app_config.consumer_secret,
    access_token_key: data.twitter.access_token_key,
    access_token_secret: data.twitter.access_token_secret
  });
  return client.get("statuses/home_timeline.json", { count: 10 });
};
