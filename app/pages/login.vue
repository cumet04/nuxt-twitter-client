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
import 'firebase/firestore'

export default {
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$router.push('/')
        return
      }

      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth())

      const config = {
        signInOptions: [firebase.auth.TwitterAuthProvider.PROVIDER_ID],
        callbacks: {
          signInSuccessWithAuthResult: result => {
            firebase
              .firestore()
              .collection('tokens')
              .doc(result.user.uid)
              .set({
                token: result.credential.accessToken,
                secret: result.credential.secret
              })
              .then(() => {
                this.$router.push('/')
              })
            // Disable firebaseui's redirect and use nuxt's it to wait until document set
            return false
          }
        },
        signInFlow: 'redirect'
      }

      ui.start('#firebaseui-auth-container', config)
    })
  }
}
</script>

<style></style>
