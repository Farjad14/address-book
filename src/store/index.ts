import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { addressBookReducer } from "../features/reducer";

const initialState = {};
const middleware = [thunk];

const rootReducer = combineReducers({
  addressBook: addressBookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers =
  (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
