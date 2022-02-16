import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const composeEnhencer = applyMiddleware(thunk);

const store = createStore(rootReducer, composeWithDevTools(composeEnhencer));

export default store;
