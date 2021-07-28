import { combineReducers } from "redux";
import users from "./users_reducer";
import movies from "./movies_reducer"
import genres from "./genres_reducer";
const entitiesReducer = combineReducers({
  users,
  movies,
  genres
});


export default entitiesReducer;