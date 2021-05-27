import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import states from "./state";
import search from "./search";
import discovery from "./discovery";
import projectReducer from "./project";
import feed from "./feed";
import donationReducer from "./donation";

const rootReducer = combineReducers({
  session,
  search,
  discovery,
  states,
  feed,
  projectReducer,
  donationReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
