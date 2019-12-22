import express from 'express'
import Twitter from 'twitter'

const app = express()

// ----------

app.get('/', function(req, res) {
  const client = Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  })
  client.get('statuses/home_timeline.json', { count: 10 }).then(resp => {
    res.send(resp)
  })
})

// ----------

module.exports = {
  path: '/api',
  handler: app
}
