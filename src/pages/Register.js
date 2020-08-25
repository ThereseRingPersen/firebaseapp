import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import RegisterForm from 'components/auth/RegisterForm';
import { register } from 'actions';

const Register = () => {
  const data = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const registerUser = (userData) => {
    register(userData, dispatch);
  };
  return (
    <div className='auth-page'>
      <div className='container has-text-centered'>
        <div className='column is-4 is-offset-4'>
          <h3 className='title has-text-grey'>Register</h3>
          <p className='subtitle has-text-grey'>Please Register to proceed.</p>
          <div className='box'>
            <figure className='avatar'>
              <img src='https://placehold.it/128x128' alt='Company Logo' />
            </figure>
            <RegisterForm onRegister={registerUser} />
          </div>
          <p className='has-text-grey'>
            <a>Sign In With Google</a>&nbsp;
            <a href='/'>Sign Up</a> &nbsp;·&nbsp;
            <a href='../'>Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
