import React, { Component } from 'react';
import './App.css';
import GameSelectorContainer from './containers/GameSelectorContainer'
import ParticipantListContainer from './containers/ParticipantListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require("./oro.gif")} className="Oro" alt="oro" />
          <p>
            Street Fighter Random Tournament/Random Opponent Generator
          </p>
        </header>
        <div className="App-body">
          <div id="Game-selector">
            <GameSelectorContainer />
          </div>
          <div id="Participant-list">
            <ParticipantListContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
