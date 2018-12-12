import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        fontSize: 28,
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
        color: cyan[500],
    },
    selected: {
        color: 'white',
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
    }
});

const Tournament = props => {
    const { classes } = props;
    if (props.tournamentStatus === "dormant") {
        return (
            <div>
                <h1>Tournament Ready!</h1><br />
                <h3>Click to start</h3><br />
                <Button id="Start-tournament" className={classes.button} onClick={() => props.startTournament()}>Start Tournament</Button>
            </div>
        )
    } else if (props.tournamentStatus === "started") {
        return (
            <div>
                <h1>Tournament Started!</h1>
                <h3>Round: {props.round}</h3><br />
                <h3>Player 1:</h3>
                <h1>{props.currentP1}</h1>
                <h3>Player 2:</h3>
                <h1>{props.currentP2}</h1>
                <h3>Game:</h3>
                <h1>{props.currentGame}</h1><br />
                <Button id="P1-wins" className={classes.button} onClick={() => props.p1Wins(props.currentP1, props.currentP2)}>{props.currentP1} Wins</Button>
                <Button id="P2-wins" className={classes.button} onClick={() => props.p1Wins(props.currentP2, props.currentP1)}>{props.currentP2} Wins</Button>
            </div>
        )
    } else if (props.tournamentStatus === "roundOver") {
            return(
            <div>
                <h1>End of Round {props.round-1}</h1> <br />
                <h3>Players Through To Next Round:</h3>
                <List>
                        {props.participants.map(value => (
                            <ListItem key={value}>
                                <ListItemText classes={{ primary: classes.selected }} primary={`${value}`} />
                            </ListItem>
                        ))}
                    </List>
                <Button id="Next-match" className={classes.button} onClick={props.nextMatch} disabled={false}>Next Match</Button>
            </div>
                )
    } else {
        return (
            <div>
                <h1>Tournament Finished!</h1> <br />
                <h1>Congratulations {props.winner}!</h1> <br />
            </div>
        )
    }
}


export default withStyles(styles)(Tournament);