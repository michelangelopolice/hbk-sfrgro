import React, { Component } from 'react';
import ParticipantList from '../components/ParticipantList'

class ParticipantListContainer extends Component {
    constructor() {
        super();
        this.state={
            number: 0
        };
        this.addParticipant = this.addParticipant.bind(this);
        this.removeParticipant = this.removeParticipant.bind(this);
    }

    addParticipant() {
        this.setState({
            number: this.state.number + 1
        });
    }

    removeParticipant() {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return(
            <div>
                <h2>Participants:</h2>
                <ParticipantList handleAdd={this.addParticipant} handleRemove={this.removeParticipant} number={this.state.number}/>
            </div>
        );
    }
}

export default ParticipantListContainer;