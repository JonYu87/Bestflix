import { connect } from 'react-redux'
import { fetchMovies } from '../../actions/movie_actions'
import MoviesIndex from './movies_index'

const mSTP = (state) => {
  return {
    movies: Object.values(state.entities.movies)
  }
};

const mDTP = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies())
  }
};

export default connect(mSTP, mDTP)(MoviesIndex)