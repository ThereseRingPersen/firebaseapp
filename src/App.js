import React, { useEffect } from 'react';
import { ToastProvider } from 'react-toast-notifications';

import { Provider } from 'react-redux';
import initStore from './store';

import { onAuthStateChanged, storeAuthUser } from 'actions';

import { BrowserRouter as Router } from 'react-router-dom';

import ServiceApp from 'ServiceApp';

const store = initStore();

function App() {
  useEffect(() => {
    const unSubscribe = onAuthStateChanged((authUser) => {
      storeAuthUser(authUser, store.dispatch);
    });
    return () => unSubscribe();
  });
  return (
    <Provider store={store}>
      <ToastProvider>
        <Router>
          <ServiceApp />
        </Router>
      </ToastProvider>
    </Provider>
  );
}

export default App;
