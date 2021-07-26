import { connect } from "react-redux";
import { fetchGenres } from "../../actions/genre_actions";
import GenreRow from "./genre_row";

const mSTP = (state) => {
  return {
    genres: Object.values(state.entities.genres)
  };
};

const mDTP = dispatch => {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
  };
};

export default connect(mSTP, mDTP)(GenreRow);