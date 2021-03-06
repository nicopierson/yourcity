import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';

import styles from './Form.module.css';
import './SignUpInLayout.css';

const LoginForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const handleDemo = async (e) => {
    e.preventDefault();
    await dispatch(login('nicopierson@gmail.com', 'password'));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/profile/${user.id}`} />;
  }

  return (
    <div className='layout__login_container'>
      <section
        className='layout__photo_container'
      >
        <img alt='barcelona' src='https://yourcity-app.s3.us-west-1.amazonaws.com/login-photos/alfons-taekema-lvXeO04CxwQ-unsplash.jpg' />
      </section>
      <section className='layout__input_login_container'>
        <form 
          onSubmit={onLogin}
          className={styles.form_container}
        >
          <div className={`${styles.header_container}`}>
            <h2
              className={styles.header_text}
            >
              Welcome Back
            </h2>
          </div>
          <div className={`${styles.form_input}`}>
            <input
              className={`${errors.length > 0 && Object.keys(errors[0]).includes('email') ? 'errors_input' : ''}`}
              name='email'
              type='email'
              id='email'
              value={email}
              onChange={updateEmail}
              placeholder=' '
            />
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
              name='password'
              type='password'
              id='password'
              value={password}
              onChange={updatePassword}
              placeholder=' '
            />
            <label htmlFor='password'>Password</label>
            {errors.length > 0 &&
                <p className='errors_message'>
                  {errors[0].password}
                </p>
              }
          </div>
          <div className={`${styles.form_input}`}>
            <button 
              type='submit'
              className='add_button'
              placeholder=' '
            >
              Login
            </button>
          </div>
          <div className={`${styles.form_input}`}>
            <p>
              <span
                onClick={() => history.push('/sign-up')}
                className={styles.demo_link}
              >
                Don't have an account.
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

export default LoginForm;
