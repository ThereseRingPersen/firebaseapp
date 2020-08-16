import { createStore, combineReducers } from 'redux';

const initStore = () => {
  const app = combineReducers({
    service: (state = { items: [] }, action) => {
      if (action.type === 'FETCH_SERVICES') {
        return { ...state, items: action.services };
      }

      return state;
    },
  });
  const browserSupport =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(app, browserSupport);
  return store;
};

export default initStore;
