import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyD7ZAy1paeCzsuJju0nxHeh3kTl_L81C6g",
    authDomain: "topsapp-72dea.firebaseapp.com",
    databaseURL: "https://topsapp-72dea.firebaseio.com",
    projectId: "topsapp-72dea",
    storageBucket: "topsapp-72dea.appspot.com",
    messagingSenderId: "802996165567"
  };
  firebase.initializeApp(config);

  export default firebase