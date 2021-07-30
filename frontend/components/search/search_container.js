import { connect } from "react-redux";
import { fetchMovies } from "../../actions/movie_actions";
import Search from "./search";

const mSTP = state => ({
  movies: Object.values(state.entities.movies)
});

const mDTP = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mSTP, mDTP)(Search);