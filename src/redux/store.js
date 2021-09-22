import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";

import thunk from "redux-thunk";

let middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);
