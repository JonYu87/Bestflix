import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MoviesIndexItem from "../movies/movies_index_item";

const List = (props) => {
  useEffect(() => {
    props.length || props.fetchLists();
    Object.values(props.movies).length || props.fetchMovies();
  }, []);

  const filterMovies = (movieId) => {
    for (let i = 0; i < props.movies.length; i++) {
      if (props.movies[i].id === parseInt(movieId)) {
        return props.movies[i];
      }
    }
  };

  if (!Object.values(props.movies).length) {
    return null;
  } else if (props.list.length === 0) {
    return (
      <div className="empty-list">
        <h2 className="empty-list-result">
          Your List is empty, add a movie <Link to="/browse">here!</Link>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="list-container">
        <div className="list-videos">
          {this.props.list.map((movieId, i) => {
            let movie = filterMovies(movieId);
            return <MoviesIndexItem key={i} movie={movie} />;
          })}
        </div>
      </div>
    );
  }
};

export default List;
