import firebase from 'firebase/app'
import 'firebase/functions'

import firebase_config from '~/.firebase.json'

const app = firebase.initializeApp(firebase_config)
if (process.env.dev_functions_emulator) {
  app.functions().useFunctionsEmulator(process.env.dev_functions_emulator)
}
