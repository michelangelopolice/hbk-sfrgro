import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import cyan from '@material-ui/core/colors/cyan';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    container: {

    },
    margin: {
        margin: theme.spacing.unit,
    },
    cssLabel: {
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
        '&$cssFocused': {
            color: cyan[500],

        },
        color: 'white',
        '&:after': {
            color: 'white'
        },
    },
    cssFocused: {
        color: cyan[500],
    },
    cssUnderline: {
        '&:before': {
            borderBottomColor: 'white'
        },
        '&:after': {
            borderBottomColor: cyan[500],
        },
        '&&&&:hover:before': {
            borderBottom: '2px solid rgba(0, 255, 255, 0.42)'
        },
    },
    button: {
        margin: theme.spacing.unit,
        color: cyan[500],
    },
    selected: {
        color: 'white',
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
    }
});


class ParticipantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textFieldValue: '',
            participants: [],
        };
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.addToList = this.addToList.bind(this)
        this.removeFromList = this.removeFromList.bind(this)
    }

    handleTextFieldChange(e) {
        this.setState({
            textFieldValue: e.target.value
        });
    }

    addToList = value => () => {
        const { participants } = this.state;
        const currentIndex = participants.indexOf(value);
        const newParticipants = [...participants];
        if (value.length > 0 && currentIndex === -1) {
            value.split(',').forEach((e) => {
                newParticipants.push(e);
            });
            this.setState({
                participants: newParticipants,
            });
            this.props.handleAdd(newParticipants.length);
            this.props.handleNames(newParticipants);
        }
        document.getElementById('Add-participant-text').value = '';
    }

    removeFromList = value => () => {
        const { participants } = this.state;
        const currentIndex = participants.indexOf(value);
        const newParticipants = [...participants];
        if (currentIndex !== -1) {
            newParticipants.splice(currentIndex, 1);
            this.setState({
                participants: newParticipants,
            });
            this.props.handleRemove();
            this.props.handleNames(newParticipants);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <h2>{this.props.number}</h2><br />
                <div>
                    <List>
                        {this.state.participants.map(value => (
                            <ListItem key={value}>
                                <ListItemText classes={{ primary: classes.selected }} primary={`${this.state.participants.indexOf(value) + 1}. ${value}`} />
                                <Button id={value} size="small" variant="contained" color="secondary" onClick={this.removeFromList(value)} >Delete<DeleteIcon className={classes.rightIcon} /></Button>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <FormControl className={classes.margin}>
                    <InputLabel
                        htmlFor="Add-participant-text"
                        classes={{ root: classes.cssLabel, focused: classes.cssFocused, }}>
                        Add Participant
                </InputLabel>
                    <Input id="Add-participant-text" classes={{ root: classes.cssLabel, underline: classes.cssUnderline, focused: classes.cssFocused }} onChange={this.handleTextFieldChange} />
                    <Button id="Add-participant-button" className={classes.button} onClick={this.addToList(this.state.textFieldValue)}>Add</Button>
                </FormControl>
            </div>
        );
    }
}

ParticipantList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParticipantList);