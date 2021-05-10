import { combineReducers } from 'redux';

import * as types from './types';
import * as actions from './actions';

const emptyBoard = () => [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

const move = (board, { player, row, col }) => {
  const updated = board.slice();

  updated[row][col] = player;

  return updated;
};

const boardReducer = (state = [[]], action) => {
  switch (action.type) {
    case types.NEW_GAME:
      return emptyBoard();
    case types.MOVE:
      return move(state, action.payload);
    default:
      return state;
  }
};

const gameoverReducer = (state = false, action) => {
  switch (action.type) {
    case types.NEW_GAME:
      return false;
    case types.GAMEOVER:
      return true;
    case types.WINNER:
      return true;
    default:
      return state;
  }
};

const winnerReducer = (state = -1, action) => {
  switch (action.type) {
    case types.WINNER:
      return action.payload;
    case types.NEW_GAME:
      return -1;
    default:
      return state;
  }
};

const playerReducer = (state = 1, action) => {
  // TODO: we should abstract out the player into an enumeration, { NONE: 0, Player1: 1, Player2: 2 }
  switch (action.type) {
    case types.PLAYER:
      return action.payload;
    case types.NEW_GAME:
      return 1;
    default:
      return state;
  }
};

const scoreboardState = {
  draws: 0,
  player1wins: 0,
  player2wins: 0
}

const scoreboardReducer = (state = scoreboardState, action) => {
  // console.log(action);
  switch (action.type) {
    case types.SET_DRAWS:
      console.log({ ...scoreboardState, draws: action.payload });
      return {...scoreboardState, draws: action.payload};
    case types.SET_PLAYER1WINS:
      return {...scoreboardState, player1Wins: action.payload};
    case types.SET_PLAYER2WINS:
      return {...scoreboardState, player2Wins: action.payload};
    default:
      return state
  }
}

const reducers = combineReducers({
  board: boardReducer,
  gameover: gameoverReducer,
  winner: winnerReducer,
  player: playerReducer,
  scoreboard: scoreboardReducer
});

export { reducers as gameState };
