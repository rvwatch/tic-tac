import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store';
import App from './views/App.jsx';

import { newGame as newGameAction } from './actions';
// track wins per player

// At a later point, we can pull the state stored in local storage (or another source)
// and use it to create the store from a previous state.
const initialState = null;
export const store = configureStore(initialState || {});

if (!initialState) {
  // since we don't have any persisted state, we should start a new game when the game loads

  // our new game operation returns an action object that we can use in the
  // redux store to dispatch
  const newGame = newGameAction();

  store.dispatch(newGame);
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
