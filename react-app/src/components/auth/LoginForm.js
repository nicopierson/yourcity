import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

import styles from './Form.module.css';

const LoginForm = () => {
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

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className={styles.outer_container_sign_in}>
      <form 
        onSubmit={onLogin}
        className={styles.sign_container}
      >
        <div className={`${styles.header_container} ${styles.header}`}>
          <h2
            className={styles.header_text}
          >
            Welcome Back
          </h2>
          <div className={styles.errors}>
            {errors.map((error, ind) => (
              <div key={ind}>{error.field}: {error.message}</div>
            ))}
          </div>
        </div>
        <div className={`${styles.form_input}`}>
          <input
            name='email'
            type='email'
            id='email'
            value={email}
            onChange={updateEmail}
            placeholder=' '
          />
          <label htmlFor='email'>Email</label>
        </div>
        <div className={`${styles.form_input}`}>
          <input
            name='password'
            type='password'
            id='password'
            value={password}
            onChange={updatePassword}
            placeholder=' '
          />
          <label htmlFor='password'>Password</label>
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
          <p>Or Try the Demo account</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
