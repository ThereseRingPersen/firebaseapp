import {
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_ERROR,
  FETCH_SERVICE_REQUEST,
} from 'types';

const selectedService = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SERVICE_SUCCESS:
      console.log('in reducer ' + action.service);
      return { service: action.service, status: 'SUCCESS' };
    case FETCH_SERVICE_REQUEST:
      return { status: 'LOADING' };
    case FETCH_SERVICE_ERROR:
      return { status: 'ERROR' };
    default:
      return state;
  }
};

export default selectedService;
