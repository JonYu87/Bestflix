import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MoviesIndexItem from "../movies/movies_index_item";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.filterMovies = this.filterMovies.bind(this);
  }

  componentDidMount() {
    this.props.length || this.props.fetchLists();
    Object.values(this.props.movies).length || this.props.fetchMovies();
  }

  filterMovies(movieId) {
    for (let i = 0; i < this.props.movies.length; i++) {
      if (this.props.movies[i].id === parseInt(movieId)) {
        return this.props.movies[i];
      }
    }
  }

  render() {
    if (!Object.values(this.props.movies).length) {
      return null;
    } else if (this.props.list.length === 0) {
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
              let movie = this.filterMovies(movieId);
              return <MoviesIndexItem key={i} movie={movie} />;
            })}
          </div>
        </div>
      );
    }
  }
}

export default List;
