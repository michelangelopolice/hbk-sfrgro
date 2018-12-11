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
                <h3>Round: {props.round}</h3>
                <Button id="Start-tournament" className={classes.button} onClick={() => props.startTournament()} disabled={false}>Start Tournament</Button>
                <Button id="P1-wins" className={classes.button} onClick={() => props.p1Wins(props.currentP1, props.currentP2)} disabled={false}>P1 Wins</Button>
                <Button id="P2-wins" className={classes.button} onClick={() => props.p1Wins(props.currentP2, props.currentP1)} disabled={false}>P2 Wins</Button>
                <Button id="Next-match" className={classes.button} onClick={props.nextMatch} disabled={false}>Next Match</Button>
                <Button id="Next-round" className={classes.button} onClick={props.nextRound} disabled={false}>Next Round</Button>
            </div>
            :
            <div>
                <h1>Tournament Finished!</h1> <br />
                <h1>Congratulations {props.winner}!</h1> <br />
            </div>
    )
}


export default withStyles(styles)(Tournament);