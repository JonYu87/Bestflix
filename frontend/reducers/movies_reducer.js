import { RECEIVE_MOVIE, RECEIVE_MOVIES } from "../actions/movie_actions";

const moviesReducer = (state ={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.movies;
    case RECEIVE_MOVIE:
      nextState(action.movies.id) = action.movie 
      return nextState;
    default:
      return state;
  }
};

export default moviesReducer;