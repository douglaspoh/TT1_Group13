import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: "AIzaSyAIkYnJoN35oGm5x110aOgJ1BSUqYk3Xs8",
    authDomain: "dbs-seed-group-13.firebaseapp.com",
    projectId: "dbs-seed-group-13",
    storageBucket: "dbs-seed-group-13.appspot.com",
    messagingSenderId: "592265601912",
    appId: "1:592265601912:web:738e02678c518b5abb9e8d",
    measurementId: "G-2RN8RWK7Y1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase