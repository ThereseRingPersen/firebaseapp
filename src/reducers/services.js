import {
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_ERROR,
} from 'types';

const initServices = (state = [], action) => {
  switch (action.type) {
    case FETCH_SERVICES_SUCCESS:
      return {
        services: action.services,
        status: 'SUCCESS',
      };
    case FETCH_SERVICES_REQUEST:
      return {
        status: 'LOADING',
      };
    case FETCH_SERVICES_ERROR:
      return {
        status: 'ERROR',
      };

    default:
      return state;
  }
};

export default initServices;
