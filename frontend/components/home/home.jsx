import React from 'react';
import { Link } from 'react-router-dom';


const Home = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button>
      <Link to="/login">Sign in!</Link>
      </button>
      &nbsp; &nbsp;
      <button>
      <Link to="/signup">Sign up!</Link>
      </button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>Sign Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Home;