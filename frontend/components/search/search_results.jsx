import React from "react";
import MoviesIndexItem from "../movies/movies_index_item";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovies: [],
    };
    this.filterMovies = this.filterMovies.bind(this);
  }
  filterMovies() {
    const movs = this.props.moviesArray;
    const query = this.props.query.toLowerCase();
    let filtered = [];
    for (let i = 0; i < movs.length; i++) {
      if (
        movs[i].title.toLowerCase().includes(query) ||
        movs[i].description.toLowerCase().includes(query)
      ) {
        filtered.push(movs[i]);
      }
      this.setState({ searchMovies: filtered });
    }
  }

  componentDidMount() {
    if (this.props.moviesArray.length === 0) {
      this.props.fetchMovies();
    }
    this.filterMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.query !== prevProps.query) {
      this.filterMovies();
    }
    if (this.props.moviesArray !== prevProps.moviesArray) {
      this.filterMovies();
    }
  }
  render() {
    if (!this.props.moviesArray) {
      return null;
    } else if (this.props.moviesArray.length === 0) {
      return (
        <div className="search-container">
          <h2>No movies found</h2>
        </div>
      );
    } else {
      return (
        <div className="search-container">
          <h2>Search results for: {this.props.query}</h2>
          {this.state.searchMovies.map((movie, i) => (
            <MoviesIndexItem key={i} movie={movie} />
          ))}
        </div>
      );
    }
  }
}
export default Search;
