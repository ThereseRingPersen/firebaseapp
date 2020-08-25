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
      dispatch(registerUserSuccess(registerFormData));
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

function registerUserSuccess(userProfile) {
  return {
    type: REGISTER_USER_SUCCESS,
    userProfile,
  };
}

function registerUserError(error) {
  return {
    type: REGISTER_USER_ERROR,
    error,
  };
}
