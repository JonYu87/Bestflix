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
          <div className="video-show-container">
            <video src={this.props.movie.video} 
            controls autoPlay
            width="100%" height="50%"
            >
            </video>
          </div>
      </div>
    )
  }
}
};

export default MovieShow;