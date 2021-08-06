import { connect } from 'react-redux'
import { fetchMovies } from '../../actions/movie_actions'
import { fetchGenres } from '../../actions/genre_actions'
import { addToList, deleteFromList, fetchLists } from '../../util/list_api_util';

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
    fetchGenres: () => dispatch(fetchGenres()),
    fetchList: (userId) => dispatch(fetchLists(userId)),
    addToList: (list) => dispatch(addToList(list)),
    deleteFromList: (movieId) => dispatch(deleteFromList(movieId))

    
  }
};

export default connect(mSTP, mDTP)(MoviesIndex)