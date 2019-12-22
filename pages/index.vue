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

export default {
  components: {
    tweet: Tweet
  },
  async asyncData({ $axios }) {
    return {
      tweets: await $axios.$get('/api/')
    }
  }
}
</script>

<style></style>
