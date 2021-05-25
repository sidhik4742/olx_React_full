import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDRcx8fygqB7E1rF-YNwkBHuwtfrYVF_Fg',
  authDomain: 'fir-c6655.firebaseapp.com',
  projectId: 'fir-c6655',
  storageBucket: 'fir-c6655.appspot.com',
  messagingSenderId: '111286308784',
  appId: '1:111286308784:web:f755135b60382776c19075',
  measurementId: 'G-1VRMNLC9FF',
};

const firebase = Firebase.initializeApp(config);

export {firebase};
