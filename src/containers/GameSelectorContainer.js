import React, { Component } from 'react';
import GameSelector from '../components/GameSelector'

class GameSelectorContainer extends Component {
    constructor() {
        super();
        this.getListOfGames = this.getListOfGames.bind(this);
    }

    getListOfGames(list) {
        this.props.handleGames(list);
    }

    render() {
        return(
            <div>
                <h2>Select Games:</h2>
                <GameSelector handleGames={this.getListOfGames}/>
            </div>
        );
    }
}

export default GameSelectorContainer;