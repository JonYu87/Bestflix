import { combineReducers } from "redux";
import users from "./users_reducer";
import movies from "./movies_reducer"

const entitiesReducer = combineReducers({
  users,
  movies
});


export default entitiesReducer;