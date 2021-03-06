import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { Redirect } from 'react-router-dom';
import { loginUser } from 'actions';

const Login = () => {
  const state = useSelector((state) => state.loginUser);
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const { addToast } = useToasts();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    if (state) {
      if (state.status === 'SUCCESS') {
        addToast('Successfully logged in.', {
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

  const onLogin = (loginData) => {
    loginUser(loginData, dispatch);
  };

  if (redirect) {
    return <Redirect to='/' />;
  }

  return (
    <div className='auth-page'>
      <div className='container has-text-centered'>
        <div className='column is-4 is-offset-4'>
          <h3 className='title has-text-grey'>Login</h3>
          <p className='subtitle has-text-grey'>Please login to proceed.</p>
          <div className='box'>
            <figure className='avatar'>
              <img src='https://placehold.it/128x128' />
            </figure>
            <form onSubmit={handleSubmit(onLogin)}>
              <div className='field'>
                <div className='control'>
                  <input
                    ref={register({ required: true })}
                    name='email'
                    className='input is-large'
                    type='email'
                    placeholder='Your Email'
                    autoComplete='email'
                  />
                  <div className='form-error'>
                    {errors?.email?.type === 'required' && (
                      <span className='help is-danger'>Email is required</span>
                    )}
                  </div>
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <input
                    ref={register({ required: true })}
                    name='password'
                    className='input is-large'
                    type='password'
                    placeholder='Your Password'
                    autoComplete='current-password'
                  />
                  <div className='form-error'>
                    {errors?.password?.type === 'required' && (
                      <span className='help is-danger'>
                        {' '}
                        Password is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                type='submit'
                className='button is-block is-info is-large is-fullwidth'
              >
                Sign In
              </button>
            </form>
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

export default Login;
