import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_REQUEST,
} from 'types';

const registerUser = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      console.log('in reducer ' + action.registered);
      return { service: action.registered, status: 'SUCCESS' };
    case REGISTER_USER_REQUEST:
      return { status: 'LOADING' };
    case REGISTER_USER_ERROR:
      return { status: 'ERROR' };
    default:
      return state;
  }
};

export default registerUser;
