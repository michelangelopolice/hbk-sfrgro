import React, { Component } from 'react';
import ParticipantList from '../components/ParticipantList'

class ParticipantListContainer extends Component {
    render() {
        return(
            <div>
                <h2>Participants:</h2>
                <ParticipantList />
            </div>
        );
    }
}

export default ParticipantListContainer;