import { combineReducers } from "redux";
import dataReducer from "../Slices/dataSlice";
import uiReducer from "../Slices/uiSlice";
const rootReducer = combineReducers({
   data: dataReducer,
   ui: uiReducer,
});

export default rootReducer; 