import { connect } from "react-redux";
import { fetchGenres } from "../../actions/genre_actions";
import Genre from "./genre";

const mSTP = (state) => {
  return {
    genres: state.entities.genres,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
  };
};

export default connect(mSTP, mDTP)(Genre);