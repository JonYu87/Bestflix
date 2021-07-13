import React from 'react'
import { Link } from 'react-router-dom'

class SplashComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div className="splash-header">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <br />
          <h2>Watch anywhere. Cancel anytime.</h2>
          <br />
          <Link to='/signup'>
            <button className="start-button">Get Started </button>
          </Link>
        </div>

        <div className="splash-body">
            <h1>Enjoy on your TV</h1>
        </div>

        <div className="splash-footer">
          <div className="footer-wrapper">Clone By Jonathan Yu:
          <a className="footer-button" href="https://github.com/JonYu87/" target="_blank"><i className="fab fa-github footer-link"></i></a>
          </div>
        </div>
      </div>
    )
  }
};

export default SplashComponent;