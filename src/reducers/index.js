import { combineReducers } from 'redux';
import services from './services';
import selectedService from './selectedService';

const app = combineReducers({
  services,
  selectedService,
});

export default app;
