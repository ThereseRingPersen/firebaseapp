import db from 'db';

import firebase from 'firebase/app';
import 'firebase/auth';

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
        return true;
      } catch (error) {
        return Promise.reject(error.message);
      }
    };
