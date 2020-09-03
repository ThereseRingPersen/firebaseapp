import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import Spinner from 'components/Spinner';
import Routes from './Routes';
import { logout } from 'actions';

const ServiceApp = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const auth = useSelector((state) => state.auth);

  return renderApplication(auth);

  function renderApplication(auth) {
    return (
      <React.Fragment>
        <Navbar auth={auth} logout={handleLogout} />
        <Navbar auth={auth} logout={handleLogout} id='navbar-clone' />
        <Sidebar />
        <Routes />
      </React.Fragment>
    );
  }
};

export default ServiceApp;
