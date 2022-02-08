import React, { useState } from "react";
import { withRouter } from "react-router";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/search/query="${search}"`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-section">
        <input
          type="text"
          placeholder="Search movie by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <button type="submit" className="search-bttn">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default withRouter(SearchBar);
