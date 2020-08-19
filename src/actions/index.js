import { FETCH_SERVICES_SUCCESS, FETCH_SERVICE_SUCCESS } from 'types';
import * as api from 'api';

export const fetchServices = () => {
  return api.fetchServices().then((snapshot) => {
    const services = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return {
      type: FETCH_SERVICES_SUCCESS,
      services,
    };
  });
};

export const fetchServiceById = (serviceId) => {
  return api.fetchServiceById.then((snapshot) => {
    return {
      type: FETCH_SERVICE_SUCCESS,
      service: { id: snapshot.id, ...snapshot.data() },
    };
  });
};
