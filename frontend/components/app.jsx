import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import HomeContainer from './home/home_container'



const App = () => (
  <div>
    <header>

    <h1>Bestflix!</h1>
    <HomeContainer />
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;