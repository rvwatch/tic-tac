import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const configureStore = (state = {}) => {
  const rootReducer = combineReducers(reducers);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = [thunk];
  const store = createStore(rootReducer, state, composeEnhancers(applyMiddleware(...middleware)));

  return store;
};

export {
  configureStore
};
