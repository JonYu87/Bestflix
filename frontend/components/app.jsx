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
      <Link to="/" className="header-link">
        BESTFLIX
      </Link>
      <HomeContainer />
    </header>
    <Switch>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;