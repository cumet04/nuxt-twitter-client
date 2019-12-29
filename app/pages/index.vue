<template>
  <div class="container">
    <ul>
      <li v-for="tweet in tweets" :key="tweet.id">
        <tweet :tweet="tweet"></tweet>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Tweet from '~/components/Tweet.vue'

import firebase from 'firebase/app'
import 'firebase/functions'

export default {
  components: {
    tweet: Tweet
  },
  async asyncData({ store }) {
    const resp = await firebase
      .app()
      .functions()
      .httpsCallable('home')({
      twitter: {
        access_token_key: process.env.dev_twitter_access_token_key,
        access_token_secret: process.env.dev_twitter_access_token_secret
      }
    })
    return {
      tweets: resp.data
    }
  }
}
</script>

<style></style>
