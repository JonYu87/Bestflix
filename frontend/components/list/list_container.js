import { connect } from "react-redux";
import List from "./list";
import { fetchLists } from "../../actions/list_actions";
import { fetchMovies } from "../../actions/movie_actions";

const mSTP = (state, ownProps) => {
  return {
    list: state.entities.lists,
    movies: state.entities.movies,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchLists: () => dispatch(fetchLists()),
    fetchMovies: () => dispatch(fetchMovies()),
  };
};

export default connect(mSTP, mDTP)(List);
