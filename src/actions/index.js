import {
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_ERROR,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_ERROR,
  FETCH_SERVICE_REQUEST,
} from 'types';
import * as api from 'api';
export const fetchServices = (dispatch) => {
  dispatch(fetchServicesPending);
  api
    .fetchServices()
    .then((services) => {
      dispatch(fetchServicesSuccess(services));
    })
    .catch((e) => {
      dispatch(fetchServicesError());
    });
};

export const fetchServiceById = (serviceId, dispatch) => {
  dispatch(fetchServicePending);
  api
    .fetchServiceById(serviceId)
    .then((service) => {
      dispatch(fetchServiceSuccess(service));
    })
    .catch((e) => {
      dispatch(fetchServiceError());
    });
};

function fetchServicesPending() {
  return {
    type: FETCH_SERVICES_REQUEST,
  };
}

function fetchServicesSuccess(services) {
  return {
    type: FETCH_SERVICES_SUCCESS,
    services,
  };
}

function fetchServicesError(error) {
  return {
    type: FETCH_SERVICES_ERROR,
    error,
  };
}

function fetchServicePending() {
  return {
    type: FETCH_SERVICE_REQUEST,
  };
}

function fetchServiceSuccess(service) {
  return {
    type: FETCH_SERVICE_SUCCESS,
    service,
  };
}

function fetchServiceError(error) {
  return {
    type: FETCH_SERVICE_ERROR,
    error,
  };
}
