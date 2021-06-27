import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCHZMxNJ6u4qeprNp2MP44-JFEEAGs5SM4",
  authDomain: "resume-2-ba173.firebaseapp.com",
  projectId: "resume-2-ba173",
  storageBucket: "resume-2-ba173.appspot.com",
  messagingSenderId: "154340332783",
  appId: "1:154340332783:web:c68aecf5380c8afd80f71a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export {db} 