import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const composeEnhencer = applyMiddleware(thunk);

const store = createStore(rootReducer, composeEnhencer);

export default store;
