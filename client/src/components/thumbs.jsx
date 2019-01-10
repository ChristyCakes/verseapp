import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as baseService from '../services/base'
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    palette: {
        primary: { main: '#76ff03', contrastText: "#fff" },
        secondary: { main: '#00e676', contrastText: "#fff" }
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
});

class Thumbs extends Component {
    constructor(props) {
        super(props);
        // this.state = {

        // }
    }




    // on thumbs up click, add tally to data in server {this.props.reference} and close modal
    handleThumbsUp() {
        console.log('tally for like!')
        this.props.handleClose();
    }

    // on thumbs down click, add tally to data in server and display new verse
    handleThumbsDown() {
        console.log('tally for dislike :(')
        this.props.handleClose();
        this.props.handleOpen();
    }



    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <button onClick={()=> this.handleThumbsUp()} style={{ backgroundColor: 'transparent', border: 'none' }}>
                    <SvgIcon className={classes.icon} color="primary">
                        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                    </SvgIcon>
                </button>
                <button onClick={()=> this.handleThumbsDown()} style={{ backgroundColor: 'transparent', border: 'none' }}>
                    <SvgIcon className={classes.icon} color="secondary">
                        <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" />
                    </SvgIcon>
                </button>
            </div>
        )
    }
}

Thumbs.propTypes = {
    classes: PropTypes.object.isRequired,
};

const ThumbsWrapped = withStyles(styles)(Thumbs);

export default ThumbsWrapped;