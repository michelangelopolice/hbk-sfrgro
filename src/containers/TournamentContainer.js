import React, { Component } from 'react';
import Tournament from '../components/Tournament'

class TournamentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: props.games,
            participants: props.participants,
            winners: [],
            losers: [],
            round: 1,
            currentGame: '',
            currentP1: '',
            currentP2: '',
            tournamentStatus: 'dormant',
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
        this.setState({
            winners: newWinners,
            losers: newLosers,
        })

        this.whatsNext(); // check what to do next

        if (this.state.participants.length > 0) {
            // console.log(`It's time for the next match in Round ${this.state.round}!`);
        }
        else if (this.state.winners.length > 1) {
            // console.log(`Round ${this.state.round} is done! Time for the next round!`);
        }
        else {
            // console.log(`The tournament is over! ${this.state.winners[0]} wins!`);
            // this.endTournament();
        }
    }

    nextMatch() {
        if (this.state.tournamentStatus === 'roundOver') {
            this.setState({
                tournamentStatus: 'started',
            })
        }

        if (this.state.participants.length > 0) {
            let player1 = this.pickRandomOpponent();
            let player2 = this.pickRandomOpponent();
            let game = this.pickRandomGame();
            this.setState({
                currentP1: player1,
                currentP2: player2,
                currentGame: game,
            })
            console.log(`It's ${player1} vs. ${player2} playing ${game}!`);
            console.log(`Current winners: ${this.state.winners}`);
            console.log(`Current losers: ${this.state.losers}`);
            console.log(`Current participants: ${this.state.participants}`);
        } else {
            this.setState({
                tournamentStatus: "roundOver"
            })
        }
    }

    nextRound() {
        console.log(`NEXT ROUND INVOKED`);
        console.log(`CURRENT WINNERS:`);
        console.log(this.state.winners)
        let newParticipants = this.state.winners;
        console.log(`NEW PARTICIPANTS FOR NEXT ROUND:`);
        console.log(newParticipants);
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
                />
            </div>
        );
    }
}

export default TournamentContainer;