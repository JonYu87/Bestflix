import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchMovies } from "../../actions/movie_actions";
import Search from "./search/search";

const mSTP = (state, ownProps) => ({
  moviesArray: Object.values(state.entities.movies),
  query: ownProps.location.search.split("q=")[1]
});

const mDTP = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
});

export default withRouter (connect(mSTP, mDTP)(Search));