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
    const data = await firebase
      .app()
      .functions()
      .httpsCallable('home')()
    return {
      tweets: data
    }
  }
}
</script>

<style></style>
