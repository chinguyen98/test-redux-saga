import { combineReducers } from "redux";
import countReducer from '../reducers/counter.reducer';

const rootReducer = combineReducers({
  counter: countReducer,
});

export default rootReducer;