import { combineReducers } from "redux";
import UserReducers from "./user";

export default combineReducers({
  user: UserReducers,
});
