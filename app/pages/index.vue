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
  props: ['tweets'],
  mounted() {
    // FIXME: wait for tokens set
    setTimeout(this.fetch_timeline, 1000)
  },
  methods: {
    fetch_timeline() {
      // firebase ignores emulator setting when functions() is called with region
      const func = process.env.dev_functions_emulator
        ? firebase.app().functions()
        : firebase.app().functions('asia-northeast1')

      // TODO: [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "tweets"
      func
        .httpsCallable('home')({
          twitter: {
            access_token_key: this.$store.state.auth.token,
            access_token_secret: this.$store.state.auth.secret
          }
        })
        .then(resp => {
          this.tweets = resp.data
        })
    }
  }
}
</script>

<style></style>
