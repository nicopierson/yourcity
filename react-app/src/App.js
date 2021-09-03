import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/TestComponents/User';
import { authenticate } from './store/session';

import Splash from './components/Splash';
import City from './components/City';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }
 
  return (
    <BrowserRouter>
      <NavBar />
        <main className='layout__main_container'> 
          <Switch>
            <Route path='/login' exact={true}>
              <LoginForm />
            </Route>
            <Route path='/sign-up' exact={true}>
              <SignUpForm />
            </Route>
            <ProtectedRoute path='/users/:userId' exact={true}>
              <User />
            </ProtectedRoute>
            <Route path='/profile/:profileId'>
              <Profile />
            </Route>
            <Route path='/' exact={true}>
              <Splash />
            </Route>
            <Route path='/city/:cityId' exact={true}>
              <City />
            </Route>
          </Switch>
        </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
