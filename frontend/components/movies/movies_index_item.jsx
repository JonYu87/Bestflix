import React from 'react';

class MoviesIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      poster: null,
      video: null
    }
  }

  render () {
    return (
      <div className="wrapping-div">
        <h1 className="browse-header">Browse</h1>
        <div className="carousel-container">
          <a className="item">
          <img src={this.props.movie.poster}/>
          </a>
          <a className="item">
          <img src={this.props.movie.poster}/>
          </a>
          <a className="item">
          <img src={this.props.movie.poster}/>
          </a>
          <a className="item">
          <img src={this.props.movie.poster}/>
          </a>
          <a className="item">
          <img src={this.props.movie.poster}/>
          </a>
          <a className="item">
          <img src={this.props.movie.poster}/>
          </a>
          <a className="item">
          <img src={this.props.movie.poster}/>
          </a>
          <a className="item">
          <img src={this.props.movie.poster}/>
          </a>
          <a className="item">
          <img src={this.props.movie.poster}/>
          </a>
          <a className="item">
          <img src={this.props.movie.poster}/>
          </a>
          {/* <video src={this.props.movie.video} controls></video> */}
        </div>
      </div>
    )
  }
};

export default MoviesIndexItem;