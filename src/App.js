import React, { Component } from 'react';
import './App.css';
import GameSelectorContainer from './containers/GameSelectorContainer'
import ParticipantListContainer from './containers/ParticipantListContainer'
import TournamentContainer from './containers/TournamentContainer'
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      participants: [],
      winners: [],
      losers: [],
      round: 1,
      currentGame: '',
      currentP1: '',
      currentP2: '',
      tournamentStatus: 'dormant',
      tournamentStart: false,
      resetAll: false
    };
    this.getListOfGames = this.getListOfGames.bind(this);
    this.getListOfParticipants = this.getListOfParticipants.bind(this);
    this.startTournament = this.startTournament.bind(this);
    this.resumeTournament = this.resumeTournament.bind(this);
    this.resetTournament = this.resetTournament.bind(this);
  }

  getListOfGames(list) {
    this.setState({
      games: list
    });
  }

  getListOfParticipants(list) {
    this.setState({
      participants: list
    });
  }

  startTournament() {
    if (this.state.games.length > 0 && this.state.participants.length > 1) {
      window.localStorage.setItem("games", JSON.stringify(this.state.games));
      window.localStorage.setItem("participants", JSON.stringify(this.state.participants));
      window.localStorage.setItem("winners", JSON.stringify([]));
      window.localStorage.setItem("losers", JSON.stringify([]));
      window.localStorage.setItem("round", this.state.round);
      window.localStorage.setItem("currentGame", this.state.currentGame);
      window.localStorage.setItem("currentP1", this.state.currentP1);
      window.localStorage.setItem("currentP2", this.state.currentP2);
      window.localStorage.setItem("tournamentStatus", this.state.tournamentStatus);
      this.setState({
        tournamentStart: true
      })
      console.log(this.state.games);
      console.log(this.state.participants);
    }
  }

  resumeTournament() {
    this.setState({
      games: JSON.parse(window.localStorage.getItem("games")),
      participants: JSON.parse(window.localStorage.getItem("participants")),
      winners: JSON.parse(window.localStorage.getItem("winners")),
      losers: JSON.parse(window.localStorage.getItem("losers")),
      round: parseInt(window.localStorage.round),
      currentGame: window.localStorage.currentGame,
      currentP1: window.localStorage.currentP1,
      currentP2: window.localStorage.currentP2,
      tournamentStatus: window.localStorage.tournamentStatus,
      tournamentStart: true
    })
  }

  resetTournament() {
    window.localStorage.clear();
    this.setState({
      resetAll: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require("./oro.gif")} className="Oro" alt="oro" />
          <p>
            Street Fighter Random Tournament/Random Opponent Generator
          </p>
        </header>
        {
          !this.state.tournamentStart ?
            <div>
              <div className="App-body" id="Setup-div">
                <div id="Game-selector">
                  <GameSelectorContainer handleGames={this.getListOfGames} />
                </div>
                <div id="Participant-list">
                  <ParticipantListContainer handleParticipants={this.getListOfParticipants} />
                </div>
              </div>
              <div id="Submit-area">
                <Button id="Submit-button" onClick={this.startTournament}>Submit</Button>
                {(window.localStorage.tournamentStatus === 'dormant' || window.localStorage.tournamentStatus === 'started' || window.localStorage.tournamentStatus === 'roundOver') && !this.state.resetAll ?
                  <Button id="Resume-button" onClick={this.resumeTournament}>Resume</Button>
                  : null
                }
                <Button id="Reset-button" onClick={this.resetTournament}>CLEAR STORAGE</Button>
              </div>
            </div>
            : null
        }
        {
          this.state.tournamentStart ?
            <div className="App-body" id="Tournament-div">
              <TournamentContainer
                games={this.state.games}
                participants={this.state.participants}
                winners={this.state.winners}
                losers={this.state.losers}
                round={this.state.round}
                currentGame={this.state.currentGame}
                currentP1={this.state.currentP1}
                currentP2={this.state.currentP2}
                tournamentStatus={this.state.tournamentStatus} />
            </div>
            : null
        }

        <footer className="App-footer">Made by Victor Sarker</footer>
      </div>
    );
  }
}

export default App;
