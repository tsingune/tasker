import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBQYhd6asobTorAA0hk0d3Q4DK9l2bmnqI",
  authDomain: "tasker-b3aca.firebaseapp.com",
  projectId: "tasker-b3aca",
  storageBucket: "tasker-b3aca.appspot.com",
  messagingSenderId: "524356360407",
  appId: "1:524356360407:web:40c946339c7eab401f3892",
  measurementId: "G-MLJY3FY0GB",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
