import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import HomeContainer from "./home/home_container";
import MoviesContainer from "./movies/movies_index_container";
import MovieShowContainer from "./movies/movie_show_container";
import SearchResultsContainer from "./search/search_results_container";
import SplashContainer from "./splash/splash_component";
import ListContainer from "./list/list_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div className="body-container">
    <header>
      <div className="header-elements">
        <Link to="/browse" className="header-link">
          <img src="https://fontmeme.com/permalink/210607/e2f4548390eddd452d1a28f7e414fda5.png" />
        </Link>
        <div className="nav-links">
          <Link to="/browse">Home</Link>
          <Link to="/list">My List</Link>
        </div>
        <HomeContainer />
      </div>
    </header>
    <main className="main">
      <Switch>
        <ProtectedRoute path="/browse" component={MoviesContainer} />
        <ProtectedRoute path="/list" component={ListContainer} />
        <ProtectedRoute
          exact
          path="/api/movies/:movieId"
          component={MovieShowContainer}
        />
        <Route
          path='/search/query=":query"'
          component={SearchResultsContainer}
        />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/" component={SplashContainer} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
);

export default App;
