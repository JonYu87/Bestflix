import React from "react";
import GenreRow from "../genre/genre_row"


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
          <i className="fas fa-search" style={{"marginRight": "12px"}}></i>
        </div>
        <div className="wrapper">
          <GenreRow query={query} />
        </div>
      </div>
    );
  }
}

export default Search;
