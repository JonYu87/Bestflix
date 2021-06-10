import React from 'react';


class MovieShow extends React.Component {

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId)
  }
  
  render () {
    if (!this.props.movie) {
      return null;
    } else {

      return (
        <div>
          <div className="video-show">
            <video src={this.props.movie.video} controls autoplay>
            </video>
          </div>
      </div>
    )
  }
}
};

export default MovieShow;