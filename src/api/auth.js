import firebase from 'firebase/app';
import 'firebase/auth';

import db from 'db';

export async function register({ email, password, fullName, avatar }) {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const { user } = res;
    const userProfile = {
      uid: user.uid,
      fullName,
      email,
      avatar,
      services: [],
      description: '',
    };
    await createUserProfile(userProfile);
    return userProfile;
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export function logout() {
  firebase.auth().signOut();
}
export function login({ email, password }) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => Promise.reject(error.message));
}

export function onAuthStateChanged(onAuthCallback) {
  return firebase.auth().onAuthStateChanged(onAuthCallback);
}

export function createUserProfile(userProfile) {
  db.collection('profile').doc(userProfile.uid).set(userProfile);
}
export function getUserProfile(uid) {
  db.collection('profile')
    .doc(uid)
    .get()
    .then((snapshot) => ({ uid, ...snapshot.data() }));
}
