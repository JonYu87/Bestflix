import React from "react";
import { Link } from "react-router-dom";
import MoviesIndexItem from "../movies/movies_index_item";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log("List mounted");
  }

  render() {
    return(
      <div>
        My List
      </div>
    )
  }
}

export default List;