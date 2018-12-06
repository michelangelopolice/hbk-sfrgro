import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import cyan from '@material-ui/core/colors/cyan';
import Button from '@material-ui/core/Button';

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
});


function ParticipantList(props) {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <h2>{props.number}</h2>
            <FormControl className={classes.margin}>
                <InputLabel
                    htmlFor="Add-participant-text"
                    classes={{ root: classes.cssLabel, focused: classes.cssFocused, }}>
                    Add Participant
                </InputLabel>
                <Input id="Add-participant-text" classes={{ root: classes.cssLabel, underline: classes.cssUnderline, focused: classes.cssFocused }} />
                <Button id="Add-participant-button" className={classes.button} onClick={() => {props.handleAdd();}}>Add</Button>
            </FormControl>
        </div>
    );
}

ParticipantList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParticipantList);