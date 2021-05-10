/*
  These are the different actions of the game duck.  Note that these are different than
  operations of the duck.
*/

import * as types from './types';

const newGame = () => ({
  type: types.NEW_GAME
});

const gameover = () => ({
  type: types.GAMEOVER
});

const movePlayer = (player, row, col) => ({
  type: types.MOVE,
  payload: { player, row, col }
});

const switchPlayer = player => ({
  type: types.PLAYER,
  payload: player
});

const winner = player => ({
  type: types.WINNER,
  payload: player
});

const setDraws = draws => ({
  type: types.SET_DRAWS,
  payload: draws
})

const setPlayer1Wins = player1wins => ({
  type: types.SET_PLAYER1WINS,
  payload: player1wins
})

const setPlayer2Wins = player2wins => ({
  type: types.SET_PLAYER2WINS,
  payload: player2wins
})



export {
  newGame,
  gameover,
  movePlayer,
  switchPlayer,
  winner,
  setDraws, 
  setPlayer1Wins,
  setPlayer2Wins
};
