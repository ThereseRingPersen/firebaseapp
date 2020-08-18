import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyDOF0XKT-RTyy3awYXLQmPkPPWHT9vfvA8',
    authDomain: 'serviceapp-fc784.firebaseapp.com',
    databaseURL: 'https://serviceapp-fc784.firebaseio.com',
    projectId: 'serviceapp-fc784',
    storageBucket: 'serviceapp-fc784.appspot.com',
    messagingSenderId: '495506139374',
    appId: '1:495506139374:web:2bfe02b21e1d071bfd6bff',
    measurementId: 'G-JWJMN7NBKP',
  })
  .firestore();

export default db;

export const { Timestamp } = firebase.firestore;
