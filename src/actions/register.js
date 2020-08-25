import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_REQUEST,
} from 'types';
import * as api from 'api';

export const register = (registerFormData, dispatch) => {
  dispatch(registerUserPending);
  api
    .register({ ...registerFormData })
    .then((_) => {
      dispatch(registerUserSuccess());
    })
    .catch((error) => {
      dispatch(registerUserError(error));
    });
};

function registerUserPending() {
  return {
    type: REGISTER_USER_REQUEST,
  };
}

function registerUserSuccess() {
  return {
    type: REGISTER_USER_SUCCESS,
    registered: true,
  };
}

function registerUserError(error) {
  return {
    type: REGISTER_USER_ERROR,
    error,
  };
}
