import { connect } from 'react-redux'
import { fetchGenres } from '../../actions/genre_actions';
import { fetchMovies } from '../../actions/movie_actions'
import MoviesIndex from './movies_index'

const mSTP = (state) => {
  return {
    movies: Object.values(state.entities.movies),
    genres: Object.values(state.entities.genres)
  }
};

const mDTP = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchGenres: () => dispatch(fetchGenres())
  }
};

export default connect(mSTP, mDTP)(MoviesIndex)