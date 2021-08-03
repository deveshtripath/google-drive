import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBMvU4Su4Ua0yKzh-Lq7_68x52mYpYTI6U",
  authDomain: "drive-5e96c.firebaseapp.com",
  projectId: "drive-5e96c",
  storageBucket: "drive-5e96c.appspot.com",
  messagingSenderId: "341844782065",
  appId: "1:341844782065:web:7a289badf81e80b4a7f250",
  measurementId: "G-95JE4T72Q3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }