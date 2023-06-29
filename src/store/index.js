import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducers/reducers";

const store = configureStore(
   {
      reducer: reducer,
   },
   applyMiddleware(thunk)
);

export default store;
