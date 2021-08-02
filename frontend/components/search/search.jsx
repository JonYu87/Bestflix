import React from "react";
import MovieContainer from "../movies/movies_index_container.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };
    this.cancel = "";
  }

  handleInputChange = (e) => {
    const query = e.target.value;
    if (!query) {
      this.setState({
        query,
        results: {},
      });
    } else {
      this.setState({ query });
    }
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            name="query"
            value={query}
            placeholder="Search"
            onChange={this.handleInputChange}
          />
          <i class="fas fa-search" style={{"margin-right": "12px"}}></i>
        </div>
        <div className="wrapper">
          <MovieContainer query={query} />
        </div>
      </div>
    );
  }
}

export default Search;
