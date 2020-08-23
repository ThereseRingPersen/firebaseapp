import { combineReducers } from 'redux';
import services from './services';
import selectedService from './selectedService';

const appReducers = combineReducers({
  services,
  selectedService,
});

export default appReducers;
