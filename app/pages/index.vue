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
  middleware: 'authenticated',
  components: {
    tweet: Tweet
  },
  async asyncData({ store }) {
    // FIXME: wait for tokens set

    // firebase ignores emulator setting when functions() is called with region
    const func = process.env.dev_functions_emulator
      ? firebase.app().functions()
      : firebase.app().functions('asia-northeast1')

    const resp = await func.httpsCallable('home')({
      twitter: {
        access_token_key: store.state.auth.token,
        access_token_secret: store.state.auth.secret
      }
    })
    return {
      tweets: resp.data
    }
  }
}
</script>

<style></style>
