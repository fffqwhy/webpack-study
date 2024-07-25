import { combineReducers } from "redux";
import { userInfoReducer } from "./user";

const reducer = combineReducers({
  userInfoReducer:userInfoReducer,
});

export default reducer;