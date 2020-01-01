<template>
  <div>
    <div id="firebaseui-auth-container"></div>
    <nuxt-link to="/">top</nuxt-link>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import firebasui from 'firebaseui'
import 'firebase/auth'

export default {
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) return

      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth())

      const config = {
        signInOptions: [firebase.auth.TwitterAuthProvider.PROVIDER_ID],
        callbacks: {
          signInSuccessWithAuthResult: result => {
            // TODO: impl
            window.location.href = '/'
            return false
          }
        },
        signInSuccessUrl: '/',
        signInFlow: 'popup'
      }

      ui.start('#firebaseui-auth-container', config)
    })
  }
}
</script>

<style></style>
