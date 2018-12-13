import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import * as baseService from '../services/base';

import pink from '@material-ui/core/colors/pink';
import lightblue from '@material-ui/core/colors/lightblue';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        margin: 5
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    }
});

const colortheme = createMuiTheme({
    palette: {
        primary: pink,
        secondary: lightblue,
    }
});

class SimpleModal extends React.Component {
    state = {
        open: false,
        reference: {},
        content: ""
    };

    handleOpen = () => {
        baseService.get('/api/passages')
            .then(data => {
                this.setState({ reference: data.passage })
            })
            // api call .then(() => )
            .then(() => this.setState({ open: true }))
            .catch(err => {
                alert("Your Verse Failed to Load");
                console.log(err)
            })
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <MuiThemeProvider theme={colortheme}>
                    <Button style={getModalStyle()} variant="contained" color={this.props.color} onClick={this.handleOpen}>{this.props.label}</Button>
                </MuiThemeProvider>
                <Modal open={this.state.open} onClose={this.handleClose}>
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="h6" id="modal-title">{this.state.reference}</Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">bible verse here</Typography>
                    </div>
                </Modal>
            </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// intermediary variable for handling recursive nesting
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;