import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import * as baseService from '../services/base';

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
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class SimpleModal extends React.Component {
    state = {
        open: false,
        content: {}
    };

    handleOpen = () => {
        baseService.get('/api/passages')
            .then(data => {
                this.setState({ content: data.passage })
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
                <Button variant="contained" color={this.props.color} onClick={this.handleOpen}>{this.props.label}</Button>
                <Modal open={this.state.open} onClose={this.handleClose}>
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="h6" id="modal-title">{this.state.content}</Typography>
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