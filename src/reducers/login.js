import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
} from 'types';

const registerUser = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { status: 'SUCCESS'};
    case LOGIN_USER_REQUEST:
      return { status: 'LOADING' };
    case LOGIN_USER_ERROR:
      return { status: 'ERROR', error= action.error };
    default:
      return state;
  }
};

export default registerUser;
