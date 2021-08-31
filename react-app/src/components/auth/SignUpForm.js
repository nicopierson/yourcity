import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp, login } from '../../store/session';

import styles from './Form.module.css';

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
      setErrors([{"field": "password", "message": "Passwords do not match."}])
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
    return <Redirect to='/' />;
  }

  return (
    <div className={`${styles.parent_container} ${styles.parent_container_sign_up}`}>
      <div className={styles.sign_up_container}>
        <form 
          onSubmit={onSignUp}
          className={styles.form_container}
        >
          <div className={`${styles.header_container} ${styles.header}`}>
            <h2
              className={styles.header_text}
            >
              Let's Get Started
            </h2>
            <div className={styles.errors}>
              {errors.length > 0 && errors.map((error, ind) => (
                <div key={ind}>{error.field}: {error.message}</div>
              ))}
            </div>
          </div>
          <div className={`${styles.form_input}`}>
            <input
              type='text'
              id='username'
              name='username'
              onChange={updateUsername}
              value={username}
              placeholder=' '
              // required={true}
              ></input>
              <label htmlFor='username'>User Name</label>
          </div>
          <div className={`${styles.form_input}`}>
            <input
              type='email'
              name='email'
              id='email'
              onChange={updateEmail}
              value={email}
              placeholder=' '
              // required={true}
              ></input>
              <label htmlFor='email'>Email</label>
          </div>
          <div className={`${styles.form_input}`}>
            <input
              type='password'
              name='password'
              id='password'
              onChange={updatePassword}
              value={password}
              required={true}
              placeholder=' '
              ></input>
              <label htmlFor='password'>Password</label>
          </div>
          <div className={`${styles.form_input}`}>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder=' '
              ></input>
              <label htmlFor='repeat_password'>Confirm Password</label>
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
      </div>
    </div>
  );
};

export default SignUpForm;
