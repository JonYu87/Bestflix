import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchMovies } from "../../actions/movie_actions";
import SearchResults from "./search_results";

const mSTP = (state, ownProps) => ({
  query: ownProps.match.params.query,
  movies: state.entities.movies
});

const mDTP = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
});

export default withRouter (connect(mSTP, mDTP)(SearchResults));