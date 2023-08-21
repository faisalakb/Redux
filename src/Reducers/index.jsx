import { combineReducers } from "redux";
import incDec from "./incDec";

const rootReducer = combineReducers({
    incDec: incDec,
  });
  
  export default rootReducer;