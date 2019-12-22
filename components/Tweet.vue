<template>
  <div>
    <article>
      <p class="info">
        <span class="username">{{ username }}</span>
        <span class="userid">@{{ userid }}</span>
        <span class="created_at">{{ created_at }}</span>
      </p>
      <p class="text">{{ text }}</p>
    </article>
  </div>
</template>

<script>
export default {
  props: ['tweet'],
  computed: {
    username() {
      return this.tweet.user.name
    },
    userid() {
      return this.tweet.user.screen_name
    },
    text() {
      return this.tweet.text
    },
    created_at() {
      return this.tweet.created_at
    }
  }
}
</script>

<style>
article {
  border: solid 1px gray;
}
</style>
