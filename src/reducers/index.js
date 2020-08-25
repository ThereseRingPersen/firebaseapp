import { combineReducers } from 'redux';
import services from './services';
import selectedService from './selectedService';
import registerUser from './registerUser';
import loginUser from './login';

const appReducers = combineReducers({
  services,
  selectedService,
  registerUser,
  loginUser,
});

export default appReducers;
