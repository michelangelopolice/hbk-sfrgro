import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

const games = ["Street Fighter", "Street Fighter II", "Street Fighter II: Champion Edition", "Street Fighter II Turbo: Hyper Fighting", "Super Street Fighter II", "Super Street Fighter II Turbo", "Street Fighter Alpha", "Street Fighter Alpha 2", "Street Fighter Alpha 3", "Street Fighter III", "Street Fighter III 2nd Impact", "Street Fighter III 3rd Strike", "Ultra Street Fighter IV", "Street Fighter V: Arcade Edition"]

class GameSelector extends Component {
    state = {
        checked: [],
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        const { classes } = this.props;

        return (
                <List className={classes.root}>
                    {games.map(value => (
                        <ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
                            <Checkbox
                                checked={this.state.checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                            />
                            <ListItemText primary={value} />
                        </ListItem>
                    ))}
                </List>
        );
    }
}

GameSelector.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameSelector);