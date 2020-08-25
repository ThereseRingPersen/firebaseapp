import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Provider } from 'react-redux';
import initStore from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';

const store = initStore();
function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <Router>
          <Navbar />
          <Navbar id={'navbar-clone'} />
          <Sidebar />
          <Routes />
        </Router>
      </ToastProvider>
    </Provider>
  );
}

export default App;
