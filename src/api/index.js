import db from 'db';

import firebase from 'firebase/app';
import 'firebase/auth';

export const createUserProfile = (userProfile) => {
  db.collection('profile').doc(userProfile.uid).set(userProfile);
};

export const fetchServiceById = (serviceId) =>
  db
    .collection('services')
    .doc(serviceId)
    .get()
    .then((snapshot) => ({ id: snapshot.id, ...snapshot.data() }));

export const fetchServices = () =>
  db
    .collection('services')
    .get()
    .then((snapshot) => {
      const services = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return services;
    });

export const register = async ({ email, password, fullName, avatar }) => {
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
};
