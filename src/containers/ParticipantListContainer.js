import React, { Component } from 'react';
import ParticipantList from '../components/ParticipantList'

class ParticipantListContainer extends Component {
    constructor() {
        super();
        this.state = {
            number: 0,
            participants: [],
        };
        this.addParticipant = this.addParticipant.bind(this);
        this.removeParticipant = this.removeParticipant.bind(this);
        this.getListOfNames = this.getListOfNames.bind(this);
    }

    addParticipant(length) {
        this.setState({
            number: length
        });
    }

    removeParticipant() {
        this.setState({
            number: this.state.number - 1
        });
    }

    getListOfNames(list) {
        this.props.handleParticipants(list);
    }

    render() {
        return (
            <div>
                <h2>Participants:</h2>
                <ParticipantList handleAdd={this.addParticipant} handleRemove={this.removeParticipant} number={this.state.number} handleNames={this.getListOfNames} />
            </div>
        );
    }
}

export default ParticipantListContainer;