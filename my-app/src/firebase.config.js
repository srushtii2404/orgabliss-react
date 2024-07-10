import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyASvc4kKxGo0NicHv1A2sRQOJ3PLtwy4Ms",
    authDomain: "fruitweb-d78c8.firebaseapp.com",
    databaseURL: "https://fruitweb-d78c8-default-rtdb.firebaseio.com",
    projectId: "fruitweb-d78c8",
    storageBucket: "fruitweb-d78c8.appspot.com",
    messagingSenderId: "732996782860",
    appId: "1:732996782860:web:970ccc45cf7a8e7c411729"
  };


  const app = getApps.Length > 0? getApp() : initializeApp(firebaseConfig);

  const firestore=getFirestore(app)
  const storage = getStorage(app)

  export {app,firestore,storage};
