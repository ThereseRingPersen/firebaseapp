import { combineReducers } from 'redux';
import services from './services';
import selectedService from './selectedService';
import registerUser from './registerUser';
import loginUser from './login';
import auth from './authorization';

const appReducers = combineReducers({
  services,
  selectedService,
  registerUser,
  loginUser,
  auth
});

export default appReducers;
