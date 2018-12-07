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
      tournamentStart: false,
    };
    this.getListOfGames = this.getListOfGames.bind(this);
    this.getListOfParticipants = this.getListOfParticipants.bind(this);
    this.startTournament = this.startTournament.bind(this);
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
    this.setState({
      tournamentStart: true
    })
    console.log(this.state.games)
    console.log(this.state.participants);
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
              </div>
            </div>
            : null
        }
        {
          this.state.tournamentStart ?
            <div className="App-body" id="Tournament-div">
              <h1>Tournament Started!</h1><br />
              <TournamentContainer />
            </div>
            : null
        }

        <footer className="App-footer">Made by Victor Sarker</footer>
      </div>
    );
  }
}

export default App;
