import { combineReducers } from "redux";
import countReducer from '../reducers/counter.reducer';

const rootReducer = combineReducers({
  count: countReducer,
});

export default rootReducer;