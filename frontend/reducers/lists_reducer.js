import {
  RECEIVE_LISTS,
  RECEIVE_LIST,
  REMOVE_FROM_LIST,
} from "../actions/list_actions";

const _nullState = [];

const ListReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let nextState = Object.assign([], state);
  switch (action.type) {
    case RECEIVE_LISTS:
      nextState = action.lists.movie_ids;
      return nextState;
    case RECEIVE_LIST:
      nextState.push(action.list.movie_id);
      return nextState;
    case REMOVE_FROM_LIST:
      nextState.splice(nextState.indexOf(action.movieId), 1);
      return nextState;
    default:
      return state;
  }
};

export default ListReducer;
