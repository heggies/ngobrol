import app from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY!,
  authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN!,
  databaseURL: process.env.REACT_APP_FIRESTORE_DATABASE_URL!,
  projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID!,
  storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET!,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGING_SENDER_ID!,
  appId: process.env.REACT_APP_FIRESTORE_APP_ID!,
  measurementId: process.env.REACT_APP_FIRESTORE_MEASUREMENT_ID!,
}

export default app.initializeApp(firebaseConfig).firestore()
