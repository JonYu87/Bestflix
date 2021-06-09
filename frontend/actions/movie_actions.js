import * as MovieAPIUtil from '../util/movies_api_util'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE'

const receiveMovies = (movies) => {
  return {
    type: RECEIVE_MOVIES,
    movies
  }
};

const receiveMovie = (movie) => {
  return {
    type: RECEIVE_MOVIE,
    movie
  }
};

export const fetchMovies = () => dispatch => {
  return MovieAPIUtil.fetchMovies().then(movies => dispatch(receiveMovies(movies)))
};

export const fetchMovie = (movieId) => dispatch => {
  return MovieAPIUtil.fetchMovie(movieId).then(movie => dispatch(receiveMovie(movie)))
};