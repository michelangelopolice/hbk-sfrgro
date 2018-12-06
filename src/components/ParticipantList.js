import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import cyan from '@material-ui/core/colors/cyan';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing.unit,
    },
    cssLabel: {
      '&$cssFocused': {
        color: cyan[500],
      },
      color: 'white'
    },
    cssFocused: {
        color: cyan[500]
    },
    cssUnderline: {
        '&:before':{
            borderBottomColor: 'white'
          },
        '&:after': {
            borderBottomColor: cyan[500],
        },
        '&&&&:hover:before':{
            borderBottom: '2px solid rgba(0, 255, 255, 0.42)'
        },
    },
  });

function ParticipantList(props) { 
    const { classes } = props;
    
    return (
        <div className={classes.container}>
            <FormControl className={classes.margin}>
            <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{root: classes.cssLabel, focused: classes.cssFocused,}}>
                Add Participant
            </InputLabel>
            <Input id="custom-css-standard-input" classes={{underline: classes.cssUnderline, focused: classes.cssFocused}} />
            </FormControl>
        </div>
    );
}

ParticipantList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ParticipantList);