import React from "react";
import { withRouter } from "react-router";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const search = this.state.search;
    this.setState({ search: "" });
    this.props.history.push(`/search/query="${search}"`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="search-section">
          <input
            type="text"
            placeholder="Search movie by title"
            value={this.state.search}
            onChange={this.update("search")}
            className="search-bar"
          />
          <button type="submit" className="search-bttn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
