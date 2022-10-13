import { createStore } from "redux";
import { reducer } from "./redux/reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
export const store = createStore(reducer, applyMiddleware(thunk));

