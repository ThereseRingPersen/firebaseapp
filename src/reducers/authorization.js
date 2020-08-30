import { SET_AUTH_USER, RESET_AUTH_USER } from 'types';

import { combineReducers } from 'redux';

const initAuth = () => {
  const user = (state = {}, action) => {
    switch (action.type) {
      case SET_AUTH_USER:
        return action.user;
      default:
        return state;
    }
  };

  const isAuth = (state = false, action) => {
    switch (action.type) {
      case SET_AUTH_USER:
        return !!action.user;
      default:
        return state;
    }
  };
  const isAuthResolved = (state = false, action) => {
    switch (action.type) {
      case SET_AUTH_USER:
        return true;
      case RESET_AUTH_USER:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    user,
    isAuth,
    isAuthResolved,
  });
};

const auth = initAuth();
export default auth;