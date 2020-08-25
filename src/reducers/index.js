import { combineReducers } from 'redux';
import services from './services';
import selectedService from './selectedService';
import registerUser from './registerUser';
import login from './login';

const appReducers = combineReducers({
  services,
  selectedService,
  registerUser,
  login,
});

export default appReducers;
