import { createStore, combineReducers } from 'redux';
import servicesReducer from 'reducers';

const addLoggerToDispatch = (store) => {
  const dispatch = store.dispatch;

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = dispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};
const initStore = () => {
  const app = combineReducers({
    service: servicesReducer,
  });

  const browserSupport =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  const store = createStore(app, browserSupport);
  store.dispatch = addLoggerToDispatch(store);
  return store;
};

export default initStore;
