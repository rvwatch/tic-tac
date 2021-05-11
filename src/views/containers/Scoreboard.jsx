import React, { Component } from 'react'
import { connect } from "react-redux";

class ScoreBoard extends Component {
    render() {
        const { draws, player1Wins, player2Wins } = this.props;
        return (
            <div>
                <h1>Scoreboard:</h1>
                <h1>Draws: { draws } </h1>
                <h3>Player 1 Wins: { player1Wins } </h3>
                <h3>Player 2 Wins: { player2Wins } </h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { scoreBoard } = state.gameState
    return {
        draws: scoreBoard.draws, 
        player1Wins: scoreBoard.player1Wins,
        player2Wins: scoreBoard.player2Wins
    }
}


export default connect(mapStateToProps)(ScoreBoard)
