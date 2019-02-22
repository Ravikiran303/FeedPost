import Firebase from '@firebase/app';

const config = {
  apiKey: "AIzaSyCcNNH5TAtUeCBLBm3gxjQlIWxaDE_PeGI",
  authDomain: "newsfeed-17695.firebaseapp.com",
  databaseURL: "https://newsfeed-17695.firebaseio.com",
  projectId: "newsfeed-17695",
  storageBucket: "newsfeed-17695.appspot.com",
  messagingSenderId: "917391169809"

  };
 export const db = Firebase.initializeApp(config);


