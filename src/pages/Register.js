import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import RegisterForm from 'components/auth/RegisterForm';
import { register } from 'actions';

const Register = () => {
  const state = useSelector((state) => state.registerUser);
  const dispatch = useDispatch();

  const [redirect, setRedirect] = useState(false);
  const { addToast } = useToasts();

  useEffect(() => {
    if (state) {
      if (state.status === 'SUCCESS') {
        addToast('Successfully created profile', {
          appearance: 'success',
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
        setRedirect(true);
      } else if (state.status === 'ERROR') {
        addToast(state.error, {
          appearance: 'error',
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      }
    }
  }, [state]);

  const registerUser = (userData) => {
    register(userData, dispatch);
  };
  if (redirect) {
    return <Redirect to='/' />;
  }
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
