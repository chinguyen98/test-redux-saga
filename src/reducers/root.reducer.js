import { combineReducers } from "redux";
import countReducer from '../reducers/counter.reducer';
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  counter: countReducer,
  user: userReducer,
});

export default rootReducer;