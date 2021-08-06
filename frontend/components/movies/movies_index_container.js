import { connect } from 'react-redux'
import { fetchMovies } from '../../actions/movie_actions'
import { fetchGenres } from '../../actions/genre_actions'
import { addToList, removeFromList, fetchLists } from '../../actions/list_actions';

import MoviesIndex from './movies_index'



const mSTP = (state) => {
  return {
    movies: Object.values(state.entities.movies),
    genres: Object.values(state.entities.genres),
    id: state.session.id,
  }
};

const mDTP = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchGenres: () => dispatch(fetchGenres()),
    fetchList: (userId) => dispatch(fetchLists(userId)),
    addToList: (list) => dispatch(addToList(list)),
    removeFromList: (movieId) => dispatch(removeFromList(movieId))

    
  }
};

export default connect(mSTP, mDTP)(MoviesIndex)