import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import HomeContainer from './home/home_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


ProtectedRoute
const App = () => (
  <div>
    <header>
      <div className="header-elements">
      <Link to="/" className="header-link">
        BESTFLIX
      </Link>
      <HomeContainer />
      </div>
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;