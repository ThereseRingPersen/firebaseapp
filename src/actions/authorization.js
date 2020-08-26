import * as api from 'api';
import { SET_AUTH_USER } from 'types';

export const onAuthStateChanged = (onAuthCallback) =>
  api.onAuthStateChanged(onAuthCallback);

export const storeAuthUser = (authUser, dispatch) => {
  if (authUser) {
    api.getUserProfile(authUser.uid).then((userWithProfile) => {
      dispatch(setUser(userWithProfile));
    });
  } else {
    dispatch(setUser(null));
    return;
  }
};
export const logout = (uid) => (dispatch) =>
  api
    .logout()
    .then((_) => {
      const userStatusDatabaseRef = api.createFirebaseRef('status', uid);
      return userStatusDatabaseRef.set(api.isOfflineForDatabase);
    })
    .then((_) => dispatch(setUser(null)));

function setUser(userProfile) {
  return {
    type: SET_AUTH_USER,
    user: userProfile,
  };
}
