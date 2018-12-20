import React, { Component } from 'react';
import SimpleModal from './simplemodal';
import { createMuiTheme } from '@material-ui/core/styles';
import 'isomorphic-fetch';

const colortheme = createMuiTheme({
    palette: {
        primary: { main:'#e91e63' },
        secondary: { main:'#03a9f4' },
        contrastText: '#fff',
    }
});

const lightcolors = createMuiTheme({
    palette: {
        primary: { main:'#ec407a' },
        secondary: { main:'#00bcd4' },
        contrastText: '#fff'
    }
})

const darkcolors = createMuiTheme({
    palette: {
        primary: { main:'#ad1457' },
        secondary: { main:'#0277bd' },
        contrastText: '#fff'
    }
})

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className='grey center'>How Do You Feel?</h1>
                <SimpleModal label="angry" theme={colortheme} color="primary" document="anger" />
                <SimpleModal label="content" theme={colortheme} color="secondary" document="content" />
                <SimpleModal label="stressed" theme={lightcolors} color="primary" document="stress"  />
                <SimpleModal label="depressed" theme={darkcolors} color="secondary" document="depression" />
            </div>
        )
    }
}

export default Home;