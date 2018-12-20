import React, { Component } from 'react';
import SimpleModal from './simplemodal';
import 'isomorphic-fetch';
// import ColorTheme from './colortheme'
import { createMuiTheme } from '@material-ui/core/styles';


const colortheme = createMuiTheme({
    palette: {
        primary: { main:'#f50057' },
        secondary: { main:'#03a9f4' },
        contrastText: '#fff',
    }
});

const lightcolors = createMuiTheme({
    palette: {
        primary: { main:'#f44336' },
        secondary: { main:'#00bcd4' },
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
                {/* <SimpleModal label="depressed" color="secondary.dark" document="depression" /> */}
            </div>
        )
    }
}

export default Home;