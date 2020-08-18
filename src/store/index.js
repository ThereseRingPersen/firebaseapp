import { createStore, combineReducers } from 'redux';
import servicesReducer from 'reducers';

const initStore = () => {
  const app = combineReducers({
    service: servicesReducer,
  });

  const browserSupport =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  const store = createStore(app, browserSupport);
  return store;
};

export default initStore;
