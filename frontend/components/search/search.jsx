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
}
