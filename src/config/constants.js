import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBd5O9-KJPOm6LixlgT28kXRdJ-3hz3tIo",
  authDomain: "diseasedetector-57220.firebaseapp.com",
  databaseURL: "https://diseasedetector-57220.firebaseio.com",
  projectId: "diseasedetector-57220",
  storageBucket: "diseasedetector-57220.appspot.com",
  messagingSenderId: "310873008627"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore().settings({ timestampsInSnapshots: true });
