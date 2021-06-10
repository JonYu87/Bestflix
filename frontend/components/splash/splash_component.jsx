import React from 'react'

class SplashComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
        <div className="splash-footer">
          <div className="footer-wrapper">Clone By Jonathan Yu:
              <a className="footer-button" href="https://github.com/JonYu87/"><i class="fab fa-github-square"></i></a>
              <a className="footer-button" href=""><i class="far fa-envelope"></i></a>
          </div>
        </div>
    )
  }
};

export default SplashComponent;