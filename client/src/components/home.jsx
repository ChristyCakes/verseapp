import React, { Component } from 'react';
import SimpleModal from './simplemodal';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import 'isomorphic-fetch';

const reds = createMuiTheme({
    palette: {
        primary: { main: '#ff1744' },
        secondary: { main: '#f73378' },
        contrastText: '#fff',
    }
});

const blues = createMuiTheme({
    palette: {
        primary: { main: '#00e5ff' },
        secondary: { main: '#2979ff' },
        contrastText: '#fff'
    }
})

const greens = createMuiTheme({
    palette: {
        primary: { main: '#76ff03' },
        secondary: { main: '#c6ff00' },
        contrastText: '#fff'
    }
})

const styles = theme => ({
    typography: {
        color: '#9E9E9E',
        textAlign: 'center'
    }
})

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <div>
                    <h1 className={classes.typography}>How Do You Feel?</h1>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <SimpleModal label="angry" theme={reds} color="primary" document="anger" />
                        <SimpleModal label="worried" theme={greens} color="primary" document="worry" />
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <SimpleModal label="ashamed" theme={blues} color="secondary" document="shame" />
                        <SimpleModal label="content" theme={blues} color="primary" document="content" />
                        <SimpleModal label="stressed" theme={reds} color="secondary" document="stress" />
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <SimpleModal label="prideful" theme={reds} color="primary" document="pride" />
                        <SimpleModal label="depressed" theme={blues} color="secondary" document="depression" />
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <SimpleModal label="apathetic" theme={greens} color="primary" document="apathy" />
                        <SimpleModal label="lonely" theme={blues} color="primary" document="loneliness" />
                    </Grid>
                </div>
            </Grid>
        )
    }
}

const HomeWrapped = withStyles(styles)(Home)

export default HomeWrapped;