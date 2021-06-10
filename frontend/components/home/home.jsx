import React from 'react';
import { Link } from 'react-router-dom';


const Home = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">
      <button className="sign-button">Sign in!</button>
      </Link>
      &nbsp; &nbsp;
      <Link to="/signup">
      <button className="sign-button">Sign up!</button>
      </Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome, {currentUser.email}!</h2>
      <button className="sign-button" onClick={logout}>Sign Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();

};


export default Home;