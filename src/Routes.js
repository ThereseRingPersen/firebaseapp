import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Faq from './pages/Faq';
import Profile from './pages/Profile';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => {
  return (
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
  );
};
export default Routes;
