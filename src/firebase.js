  import * as firebase from 'firebase';

    var firebaseConfig = {
    apiKey: "AIzaSyBm4G4L1A-3uMy15hX2XoI6qvJ9xlmKJ8Y",
    authDomain: "diary-db292.firebaseapp.com",
    databaseURL: "https://diary-db292.firebaseio.com",
    projectId: "diary-db292",
    storageBucket: "diary-db292.appspot.com",
    messagingSenderId: "997318289916",
    appId: "1:997318289916:web:c81b55420470a5bd80ea79",
    measurementId: "G-G2S3GGGF98"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export const database= firebase.database().ref('/notes');
  export const userDatabase=firebase.database().ref('/users');
  export const auth =firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const facebookProvider = new firebase.auth.FacebookAuthProvider();