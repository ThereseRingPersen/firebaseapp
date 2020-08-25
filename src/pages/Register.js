import React from 'react';


const Register = () => {
  return (
    <div className='auth-page'>
      <div className='container has-text-centered'>
        <div className='column is-4 is-offset-4'>
          <h3 className='title has-text-grey'>Register</h3>
          <p className='subtitle has-text-grey'>Please Register to proceed.</p>
          <div className='box'>
            <figure className='avatar'>
              <img src='https://placehold.it/128x128' />
            </figure>
            <form>
              <div className='field'>
                <div className='control'>
                  <input
                    name='email'
                    className='input is-large'
                    type='email'
                    placeholder='Your Email'
                    autofocus=''
                    autocomplete='email'
                  />
                  <div className='form-error'>
                    <span className='help is-danger'>Email is required</span>
                    <span className='help is-danger'>
                      Email address is not valid
                    </span>
                  </div>
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <input
                    name='fullName'
                    className='input is-large'
                    type='text'
                    placeholder='Full Name'
                    autofocus=''
                  />
                  <div className='form-error'>
                    <span className='help is-danger'>Name is required</span>
                    <span className='help is-danger'>Name is not valid</span>
                  </div>
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <input
                    name='avatar'
                    className='input is-large'
                    type='text'
                    placeholder='Avatar'
                    autofocus=''
                  />
                  <div className='form-error'>
                    <span className='help is-danger'>Avatar is required</span>
                    <span className='help is-danger'>Avatart is not valid</span>
                  </div>
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <input
                    name='password'
                    className='input is-large'
                    type='password'
                    placeholder='Your Password'
                    autocomplete='current-password'
                  />
                  <div className='form-error'>
                    <span className='help is-danger'>Password is required</span>
                  </div>
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <input
                    name='passwordConfirmation'
                    className='input is-large'
                    type='password'
                    placeholder='Repeat Password'
                    autocomplete='current-password'
                  />
                  <div className='form-error'>
                    <span className='help is-danger'>
                      Password Confirmation is required
                    </span>
                  </div>
                </div>
              </div>
              <button
                type='submit'
                className='button is-block is-info is-large is-fullwidth'
              >
                Register
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

export default Register;
