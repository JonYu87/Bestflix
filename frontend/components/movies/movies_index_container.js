import { connect } from 'react-redux'
import { fetchMovies } from '../../actions/movie_actions'
import { fetchGenres } from '../../actions/genre_actions'
import { addToList, deleteFromList, fetchLists } from '../../actions/list_actions';

import MoviesIndex from './movies_index'



const mSTP = (state, ownProps) => {
  return {
    movies: Object.values(state.entities.movies),
    genres: Object.values(state.entities.genres),
    movie: ownProps.movie,
    id: state.session.id,
    // inList: state.entities.lists.includes(ownProps.movie.id)
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