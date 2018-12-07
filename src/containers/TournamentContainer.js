import React, { Component } from 'react';
import Tournament from '../components/Tournament'

class TournamentContainer extends Component {
    constructor() {
        super();
        this.state = {
          //games: this.props.games,
          //participants: this.props.participants,
        };

      }
    render() {
        return(
            <Tournament />
        );
    }
}

export default TournamentContainer;