import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyChpBFbQCtoVpPI-J5fZGIGKDY0ho1UpD4",
  authDomain: "slack-cloning.firebaseapp.com",
  databaseURL: "https://slack-cloning.firebaseio.com",
  projectId: "slack-cloning",
  storageBucket: "slack-cloning.appspot.com",
  messagingSenderId: "186640194106",
  appId: "1:186640194106:web:0202e2e9d1efab6fa5b303",
  measurementId: "G-MGXMBFDRFZ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
