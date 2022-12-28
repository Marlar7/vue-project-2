

import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAEKclDLEXqFld9YUpVahtCOT1k_yNQjDM",
    authDomain: "vue-block-system.firebaseapp.com",
    projectId: "vue-block-system",
    storageBucket: "vue-block-system.appspot.com",
    messagingSenderId: "990748825184",
    appId: "1:990748825184:web:fd7ddd23cf06ebacbe1505"
  };
  firebase.initializeApp(firebaseConfig)
  let db=firebase.firestore();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {db,timestamp};