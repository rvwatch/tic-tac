import React, { Component } from 'react';
import { connect } from 'react-redux';

class Game extends Component {
  render() {
    const { scoreboard } = this.props

    return (
      <div>
        <h3>Score:</h3>
        <h4>Draws: { scoreboard.draws }</h4>
        <h4>Player1: { scoreboard.player1wins }</h4>
        <h4>Player2: { scoreboard.player2wins }</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  scoreboard: state.gameState.scoreboard,
})


export default connect(mapStateToProps)(Game);
