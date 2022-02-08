import React from "react";

class MovieHover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      movie: {},
    };
  }

  render() {
    if (this.props.isHovering) {
      return (
        <div className="movie-hover-wrapper">
          <div className="move-hover-container">
            <p className="movie-hover-header">
              Title: {this.props.movie.title}
            </p>
            <br />
            <p className="movie-hover-rating">
              Rating: {this.props.movie.rating}
            </p>
            <br />
            <p className="movie-hover-description">
              {this.props.movie.description}
            </p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MovieHover;
