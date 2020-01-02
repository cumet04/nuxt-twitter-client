import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default function(context) {
  if (context.isDev) {
    context.store.commit('auth/set', {
      token: process.env.dev_twitter_access_token_key,
      secret: process.env.dev_twitter_access_token_secret
    })
    return
  }
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      return firebase
        .firestore()
        .collection('tokens')
        .doc(user.uid)
        .get()
        .then(doc => {
          const data = doc.data()
          context.store.commit('auth/set', {
            token: data.token,
            secret: data.secret
          })
        })
      // TODO: error handling (for document not found)
    } else {
      context.redirect('/login/')
    }
  })
}
