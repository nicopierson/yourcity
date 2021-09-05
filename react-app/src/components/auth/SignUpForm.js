import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp, login } from '../../store/session';

import styles from './Form.module.css';
import './SignUpInLayout.css';

const SignUpForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors([{"password": "", "confirmPassword": "Passwords do not match."}])
    }
  };

  const handleDemo = async (e) => {
    e.preventDefault();
    await dispatch(login('nicopierson@gmail.com', 'password'));
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/profile/${user.id}`} />;
  }

  return (
    <div className='layout__sign_up_container'>
      <section
        className='layout__photo_container'
      >
        <img alt='paris' src='https://yourcity-app.s3.us-west-1.amazonaws.com/login-photos/cyril-mazarin-WSvth_lwCi0-unsplash.jpg' />
      </section>
      <section className='layout__input_sign_up_container'>
        <form 
          onSubmit={onSignUp}
          className={styles.form_container}
        >
          <div className={`${styles.header_container}`}>
            <h2
              className={styles.header_text}
            >
              Let's Get Started
            </h2>
          </div>
          <div className={`${styles.form_input}`}>
            <input
              className={`${errors.length > 0 && Object.keys(errors[0]).includes('username') ? 'errors_input' : ''}`}
              type='text'
              id='username'
              name='username'
              onChange={updateUsername}
              value={username}
              placeholder=' '
              // required={true}
              ></input>
              <label htmlFor='username'>User Name</label>
              {errors.length > 0 &&
                <p className='errors_message'>
                  {errors[0].username}
                </p>
              }
          </div>
          <div className={`${styles.form_input}`}>
            <input
              className={`${errors.length > 0 && Object.keys(errors[0]).includes('email') ? 'errors_input' : ''}`}
              type='email'
              name='email'
              id='email'
              onChange={updateEmail}
              value={email}
              placeholder=' '
              // required={true}
              ></input>
              <label htmlFor='email'>Email</label>
              {errors.length > 0 &&
                <p className='errors_message'>
                  {errors[0].email}
                </p>
              }
          </div>
          <div className={`${styles.form_input}`}>
            <input
              className={`${errors.length > 0 && Object.keys(errors[0]).includes('password') ? 'errors_input' : ''}`}
              type='password'
              name='password'
              id='password'
              onChange={updatePassword}
              value={password}
              required={true}
              placeholder=' '
              ></input>
              <label htmlFor='password'>Password</label>
              {errors.length > 0 &&
                <p className='errors_message'>
                  {errors[0].password}
                </p>
              }
          </div>
          <div className={`${styles.form_input}`}>
            <input
              className={`${errors.length > 0 && Object.keys(errors[0]).includes('confirmPassword') ? 'errors_input' : ''}`}
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder=' '
              ></input>
              <label htmlFor='repeat_password'>Confirm Password</label>
              {errors.length > 0 &&
                <p className='errors_message'>
                  {errors[0].confirmPassword}
                </p>
              }
          </div>
          <div className={`${styles.form_input}`}>
            <button 
              type='submit'
              className='add_button'    
            >
              Sign Up
            </button>
          </div>
          <div className={`${styles.form_input}`}>
            <p>
              <span
                onClick={() => history.push('/login')}
                className={styles.demo_link}
              >
                Already have an account.
              </span>
              <span
                onClick={handleDemo}
                className={styles.demo_link}
              >
                Or Try the Demo account
              </span>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUpForm;
