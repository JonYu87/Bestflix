import { connect } from 'react-redux'
import { fetchMovie } from '../../actions/movie_actions'
import MovieShow from './movie_show'

const mSTP = (state, ownProps) => {
  return {
    movie: state.entities.movies[ownProps.match.params.movieId]
  }
};

const mDTP = dispatch => {
  return {
    fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
  }
};

export default connect(mSTP, mDTP)(MovieShow)