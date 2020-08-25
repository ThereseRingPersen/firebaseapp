import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import { Provider } from 'react-redux';
import initStore from './store';

import { BrowserRouter as Router } from 'react-router-dom';

import ServiceApp from 'ServiceApp';

const store = initStore();

function App() {
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
