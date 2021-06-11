import React from 'react'

class SplashComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
        <div className="splash-footer">
          <div className="footer-wrapper">Clone By Jonathan Yu:
          <a className="footer-button" href="https://github.com/JonYu87/" target="_blank"><i className="fab fa-github footer-link"></i></a>
          </div>
        </div>
    )
  }
};

export default SplashComponent;