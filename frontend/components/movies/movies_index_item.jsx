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
      <div>
        <li>
          <img src={this.props.movie.poster}/>
          <video src={this.props.movie.video} controls></video>
        </li>
      </div>
    )
  }
};

export default MoviesIndexItem;