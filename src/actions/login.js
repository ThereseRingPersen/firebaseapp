import * as api from 'api';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_ERROR,
} from 'types';

export const loginUser = (loginFormData, dispatch) => {
  dispatch(loginUserPending);
  api
    .login({ ...loginFormData })
    .then((_) => {
      dispatch(loginUserSuccess());
    })
    .catch((error) => {
      dispatch(loginUserError(error));
    });
};

function loginUserPending() {
  return {
    type: LOGIN_USER_REQUEST,
  };
}

function loginUserSuccess() {
  return {
    type: LOGIN_USER_SUCCESS,
  };
}

function loginUserError(error) {
  return {
    type: LOGIN_USER_ERROR,
    error,
  };
}
