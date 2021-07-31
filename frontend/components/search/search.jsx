import React from "react";

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
    }
    this.setState({
      searchMovies: filtered,
    });
  }

  componentDidMount() {
    if (!this.props.moviesArray.length) {
      this.props.fetchMovies();
    }
    this.filterMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.filterMovies();
    }
    if (prevProps.moviesArray !== this.props.moviesArray) {
      this.filterMovies();
    }
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-header">
          <h1>Search Results</h1>
        </div>
        <div className="search-results">
          {this.state.searchMovies.length ? (
            this.state.searchMovies.map((movie) => (
              <div className="search-result" key={movie.id}>
                <div className="search-result-img">
                  <img src={movie.image} alt={movie.title} />
                </div>
                <div className="search-result-info">
                  <h2>{movie.title}</h2>
                  <p>{movie.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="search-result">
              <h2>No results found</h2>
            </div>
          )}
        </div>
      </div>
    );
   }
}
