import { combineReducers } from "redux";
import users from "./users_reducer";
import movies from "./movies_reducer";
import genres from "./genres_reducer";
import lists from "./lists_reducer";
const entitiesReducer = combineReducers({
  users,
  movies,
  genres,
  lists,
});

export default entitiesReducer;
