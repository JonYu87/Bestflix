import React from "react";
import { Link } from "react-router-dom";
import MoviesIndexItem from "../movies/movies_index_item";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.length || this.props.fetchLists();
    Object.values(this.props.movies).length || this.props.fetchMovies();
  }

  render() {
    if (!Object.values(this.props.movies).length) {
      return null;
    } else if (this.props.list.length === 0) {
      return (
        <div className="empty-list">
          <h2>
            Your List is empty, add a movie <Link to="/browse">here!</Link>
          </h2>
        </div>
      );
    } else {
      return (
        <div className="list-container">
          <div className="list-videos">
            {this.props.list.map((movieId, i) => {
              return (
                <MoviesIndexItem key={i} movie={this.props.movies[movieId]} />
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default List;
