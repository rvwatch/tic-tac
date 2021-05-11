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

const initialScoreboardState = {
  draws: 0,
  player1Wins: 0,
  player2Wins: 0
}

const scoreBoardReducer = (state = initialScoreboardState, action) => {

  switch (action.type) {
    case types.DRAWS:
      return {
        ...state,
        draws: state.draws + 1
      };
    case types.PLAYER1_WINS:
      return {
        ...state,
        player1Wins: state.player1Wins + 1
      };

    case types.PLAYER2_WINS:
      return {
        ...state,
        player2Wins: state.player2Wins + 1
      };

    default:
      return state;
  }
}

const reducers = combineReducers({
  board: boardReducer,
  gameover: gameoverReducer,
  winner: winnerReducer,
  player: playerReducer,
  scoreBoard: scoreBoardReducer
});

export { reducers as gameState };
