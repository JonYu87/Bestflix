import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
    <div>
      Placeholder for NavBar
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign up!</Link>
      <br />
      <button onClick={this.props.logout}>Log Out</button>
      <br />
    </div>
    )
  }
};

export default NavBar;