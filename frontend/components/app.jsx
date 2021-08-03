import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import HomeContainer from './home/home_container'
import MoviesContainer from './movies/movies_index_container.jsx'
import MovieShowContainer from './movies/movie_show_container'
import Search from './search/search'
import SplashContainer from './splash/splash_component.jsx'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div className="body-container">
    <header>
      <div className="header-elements">
      <Link to="/" className="header-link">
        <img src="https://fontmeme.com/permalink/210607/e2f4548390eddd452d1a28f7e414fda5.png"/>
      </Link>
      <HomeContainer />
      </div>
    </header>
    <main className="main">
      <Switch>
        <ProtectedRoute path="/browse" component={MoviesContainer}/>
        {/* <ProtectedRoute path="/search" component={Search}/> */}
        <ProtectedRoute exact path="/api/movies/:movieId" component={MovieShowContainer}/>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/" component={SplashContainer} />
        <Redirect to="/"/>
      </Switch>
    </main>
  </div>
);

export default App;