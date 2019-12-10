import React, { Component } from 'react';
import Tournament from '../components/Tournament'

class TournamentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: props.games,
            participants: props.participants,
            winners: props.winners,
            losers: props.losers,
            round: props.round,
            currentGame: props.currentGame,
            currentP1: props.currentP1,
            currentP2: props.currentP2,
            tournamentStatus: props.tournamentStatus,
        };
        this.initTournament = this.initTournament.bind(this);
        this.pickRandomGame = this.pickRandomGame.bind(this);
        this.pickRandomOpponent = this.pickRandomOpponent.bind(this);
        this.pickRandomLoser = this.pickRandomLoser.bind(this);
        this.playerWinLose = this.playerWinLose.bind(this);
        this.nextMatch = this.nextMatch.bind(this);
        this.nextRound = this.nextRound.bind(this);
        this.endTournament = this.endTournament.bind(this);
        this.whatsNext = this.whatsNext.bind(this);
    }

    initTournament() {
        console.log(`Tournament Starting...`)
        window.localStorage.setItem("tournamentStatus", 'started');
        this.setState({
            winners: [],
            loser: [],
            tournamentStatus: 'started'
        })
        this.nextMatch();
    }

    whatsNext() {
        if (this.state.participants.length > 0) {
            console.log(`It's time for the next match in Round ${this.state.round}!`);
            this.nextMatch();
        }
        else if (this.state.winners.length > 1) {
            console.log(`Round ${this.state.round} is done! Time for the next round!`);
            this.nextRound();
            this.nextMatch();
        }
        else {
            console.log(`The tournament is over! ${this.state.winners[0]} wins!`);
            this.endTournament();
        }
    }

    pickRandomGame() {
        let index = Math.floor(Math.random() * this.state.games.length)
        return this.state.games[index]
    }

    pickRandomOpponent() {
        let newParticipants = this.state.participants;
        if (newParticipants.length > 0) {
            let index = Math.floor(Math.random() * newParticipants.length)
            let participant = (newParticipants[index])
            newParticipants.splice(index, 1)
            window.localStorage.setItem("participants", JSON.stringify(newParticipants));
            this.setState({
                participants: newParticipants,
            })
            return participant
        }
        else {
            return this.pickRandomLoser();
        }
    }

    pickRandomLoser() {
        let newLosers = this.state.losers;
        let index = Math.floor(Math.random() * newLosers.length);
        let loser = (newLosers[index]);
        newLosers.splice(index, 1);
        window.localStorage.setItem("losers", JSON.stringify(newLosers));
        this.setState({
            losers: newLosers,
        })
        return loser
    }

    playerWinLose(winner, loser) {
        console.log(`${winner} wins! Bad luck ${loser}.`);
        let newWinners = this.state.winners;
        let newLosers = this.state.losers;
        newWinners.push(winner);
        newLosers.push(loser);
        window.localStorage.setItem("winners", JSON.stringify(newWinners));
        window.localStorage.setItem("losers", JSON.stringify(newLosers));
        this.setState({
            winners: newWinners,
            losers: newLosers,
        })
        this.whatsNext();
    }

    nextMatch() {
        if (this.state.tournamentStatus === 'roundOver') {
            window.localStorage.setItem("tournamentStatus", 'started');
            this.setState({
                tournamentStatus: 'started',
            })
        }

        if (this.state.participants.length > 0) {
            let player1 = this.pickRandomOpponent();
            let player2 = this.pickRandomOpponent();
            let game = this.pickRandomGame();
            window.localStorage.setItem("currentP1", player1);
            window.localStorage.setItem("currentP2", player2);
            window.localStorage.setItem("currentGame", game);
            this.setState({
                currentP1: player1,
                currentP2: player2,
                currentGame: game,
            })
            
            console.log(`It's ${player1} vs. ${player2} playing ${game}!`);
        } else {
            window.localStorage.setItem("tournamentStatus", 'roundOver');
            this.setState({
                tournamentStatus: "roundOver"
            })
        }
    }

    nextRound() {
        let newParticipants = this.state.winners;
        window.localStorage.setItem("round", this.state.round + 1);
        window.localStorage.setItem("participants", JSON.stringify(newParticipants));
        window.localStorage.setItem("winners", JSON.stringify([]));
        window.localStorage.setItem("losers", JSON.stringify([]));
        this.setState({
            round: this.state.round + 1,
            participants: newParticipants,
            winners: [],
            losers: [],
        })
    }

    endTournament() {
        this.setState({
            tournamentStatus: 'ended'
        })
        window.localStorage.clear();
    }

    render() {
        return (
            <div>
                <Tournament
                    currentP1={this.state.currentP1}
                    currentP2={this.state.currentP2}
                    currentGame={this.state.currentGame}
                    round={this.state.round}
                    startTournament={this.initTournament}
                    p1Wins={this.playerWinLose}
                    p2Wins={this.playerWinLose}
                    nextMatch={this.nextMatch}
                    nextRound={this.nextRound}
                    tournamentStatus={this.state.tournamentStatus}
                    winner={this.state.winners[0]}
                    genGame={this.genGameTest}
                    randomTest={this.randomTest}
                    participants={this.state.participants}
                    winners={this.state.winners}
                    losers={this.state.losers}
                />
            </div>
        );
    }
}

export default TournamentContainer;