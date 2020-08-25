import { combineReducers } from 'redux';
import services from './services';
import selectedService from './selectedService';
import registerUser from './registerUser';

const appReducers = combineReducers({
  services,
  selectedService,
  registerUser,
});

export default appReducers;
