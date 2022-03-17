import React, { useEffect } from "react";

const MovieShow = (props) => {
  useEffect(() => {
    this.props.fetchMovie(this.props.match.params.movieId);
  }, []);

  if (!props.movie) {
    return null;
  } else {
    return (
      <div>
        <div className="video-show-container">
          <video
            src={props.movie.video}
            controls
            autoPlay
            width="100%"
            height="50%"
          ></video>
        </div>
      </div>
    );
  }
};

export default MovieShow;
