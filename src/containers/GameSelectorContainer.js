import React, { Component } from 'react';
import GameSelector from '../components/GameSelector'

class GameSelectorContainer extends Component {
    render() {
        return(
            <div>
                <h2>Select Games:</h2>
                <GameSelector />
            </div>
        );
    }
}

export default GameSelectorContainer;