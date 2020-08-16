import React from 'react';
import { Provider } from 'react-redux';
import initStore from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import HomePage from 'pages/HomePage';
import ServicesPage from 'pages/ServicesPage';
import FaqPage from 'pages/FaqPage';
import ProfilePage from 'pages/ProfilePage';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

const store = initStore();
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Navbar id={'navbar-clone'} />
        <Sidebar />
        <Switch>
          <Route path='/services'>
            <ServicesPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/profile'>
            <ProfilePage />
          </Route>
          <Route path='/faq'>
            <FaqPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
