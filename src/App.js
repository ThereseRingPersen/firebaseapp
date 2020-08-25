import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Provider } from 'react-redux';
import initStore from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Services from 'pages/Services';
import ServiceDetails from 'pages/ServiceDetails';
import Faq from 'pages/Faq';
import Profile from 'pages/Profile';

import Register from 'pages/Register';
import Login from 'pages/Login';

const store = initStore();
function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <Router>
          <Navbar />
          <Navbar id={'navbar-clone'} />
          <Sidebar />
          <Switch>
            <Route path='/services/:serviceId'>
              <ServiceDetails />
            </Route>
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/faq'>
              <Faq />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </ToastProvider>
    </Provider>
  );
}

export default App;
