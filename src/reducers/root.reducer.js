import { combineReducers } from "redux";
import countReducer from '../reducers/count.reducer.js';

const rootReducer = combineReducers({
  countReducer,
});

export default rootReducer;