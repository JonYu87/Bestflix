import React from "react";
import MoviesIndexItem from "../movies/movies_index_item";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { movies } = this.props;
    if (Object.values(movies).length < 1) {
      this.props.fetchMovies();
    }
  }

  filterMovies() {
    const { query, movies } = this.props;
    const moviesList = Object.values(movies);
    const results = moviesList.filter((movie) => {
      const title = movie.title.toLowerCase();
      return title.includes(query.toLowerCase());
    });
    return results;
  }
  render() {
    const results = this.filterMovies();
    return (
      <div>
        {results.length === 0 ? (
          <div>
            <div className="results"></div>
            <h2 className="no-results">
              No results found for {this.props.query}
            </h2>
            <p className="no-results">Try searching for something else</p>
          </div>
        ) : (
          <div className="results-list">
            {results.map((movie) => {
              return (
                <MoviesIndexItem key={`search-${movie.id}`} movie={movie} />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default SearchResults;
