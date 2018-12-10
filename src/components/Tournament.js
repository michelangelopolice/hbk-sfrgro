import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: cyan[500],
    }
});

const Tournament = props => {
    const { classes } = props;
    console.log(props);

    return (
        !props.tournamentOver ?
            <div>
                <h1>Tournament Started!</h1> <br />
                <h2>Player 1: {props.currentP1}</h2>
                <h2>Player 2: {props.currentP2}</h2>
                <h2>Game: {props.currentGame}</h2>
                <Button id="Start-tournament" className={classes.button} onClick={props.startTournament}>Start Tournament</Button>
                <Button id="P1-wins" className={classes.button} onClick={() => props.p1Wins(props.currentP1, props.currentP2)}>P1 Wins</Button>
                <Button id="P2-wins" className={classes.button} onClick={() => props.p1Wins(props.currentP2, props.currentP1)}>P2 Wins</Button>
            </div>
            :
            <div>
                <h1>Tournament Finished!</h1> <br />
                <h1>Congratulations {props.winner}!</h1> <br />
            </div>
    )
}


export default withStyles(styles)(Tournament);