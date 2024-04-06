import { applyMiddleware, createStore } from "redux";
import reducers from "./AllReducer";
import { thunk } from "redux-thunk";



export const storeRedux=createStore(reducers,{},applyMiddleware(thunk))