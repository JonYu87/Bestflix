import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "../search/search_bar";

const Home = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">
      <button className="sign-button">Sign in</button>
      </Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome, {currentUser.email}!</h2>
      <SearchBar />
      <button className="sign-button" onClick={logout}>Sign Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();

};

export default Home;