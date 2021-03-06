import React from "react";
import { Link } from "react-router-dom";

class SplashComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="splash-header">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <br />
          <h2>Watch anywhere. Cancel anytime.</h2>
          <br />
          <Link to="/signup">
            <button className="start-button">Get Started </button>
          </Link>
        </div>

        <div className="splash-body">
          <div className="splash-body-text">
            <h1>Enjoy on your TV.</h1>
            <h3>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h3>
          </div>

          <img
            className="splash-tv"
            src="https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/tv.png"
          />
        </div>

        <div className="splash-footer">
          <div className="footer-wrapper">
            Clone By Jonathan Yu:
            <a
              className="footer-button"
              href="https://github.com/JonYu87/"
              target="_blank"
            >
              <i className="fab fa-github footer-link"></i>
            </a>
            <a className="footer-button" href="https://www.linkedin.com/in/jonathan-yu-352b02186/" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashComponent;
